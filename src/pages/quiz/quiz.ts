import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

type Question = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

export type QuizSettings = {
    amount: number;
    category: string;
    difficulty: string;
    type: string;
    timeQuiz: number;
};

export type QuizAnswer = {
    question: Question;
    userAnswer: string | null;
    timeTaken: number;
};

export type QuizData = {
    questions: Question[];
    currentQuestion: number;
    answers: QuizAnswer[];
    startTime: number;
    settings: QuizSettings;
};

export const useQuizLogic = () => {
    const navigate = useNavigate();
    const [quizData, setQuizData] = useState<QuizData | null>(null);
    const [timeLeft, setTimeLeft] = useState(0);
    const [randomizedAnswers, setRandomizedAnswers] = useState<string[]>([]);
    const [questionStartTime, setQuestionStartTime] = useState<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const parseLocalStorageData = (keys: string[]) => {
        for (const key of keys) {
            const savedData = localStorage.getItem(key);
            if (savedData) {
                try {
                    const parsedData = JSON.parse(savedData);
                    if (parsedData && parsedData.questions && parsedData.questions.length > 0) {
                        return parsedData;
                    }
                } catch (error) {
                    console.error('Error parsing quiz data', error);
                }
            }
        }
        return null;
    };

    const endQuizWithRemainingQuestions = (finalQuizData?: QuizData) => {
        const dataToSave = finalQuizData || quizData ||
            parseLocalStorageData(['unfinishedQuiz', 'quizResults']);

        if (!dataToSave || !dataToSave.questions || dataToSave.questions.length === 0) {
            navigate("/");
            return;
        }

        try {
            const completedAnswers = dataToSave.questions.map((question: Question, index: string | number) => {
                const existingAnswer = dataToSave.answers?.[index];
                return existingAnswer || {
                    question,
                    userAnswer: null,
                    timeTaken: 0,
                };
            });

            const finalQuizResults = {
                ...dataToSave,
                answers: completedAnswers
            };

            localStorage.setItem("quizResults", JSON.stringify(finalQuizResults));
            localStorage.removeItem("unfinishedQuiz");

            if (timerRef.current) {
                clearInterval(timerRef.current);
            }

            navigate("/result");
        } catch (error) {
            navigate("/");
        }
    };

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerRef.current!);

                    const storedQuizData = parseLocalStorageData(['unfinishedQuiz', 'quizResults']);

                    if (storedQuizData) {
                        endQuizWithRemainingQuestions(storedQuizData);
                    } else {
                        navigate("/");
                    }

                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    useEffect(() => {
        const parsedQuiz = parseLocalStorageData(['unfinishedQuiz']);

        if (!parsedQuiz || !parsedQuiz.questions || parsedQuiz.questions.length === 0) {
            navigate("/");
            return;
        }

        setQuizData(parsedQuiz);

        const elapsedTime = Math.floor((Date.now() - parsedQuiz.startTime) / 1000);
        const remainingTime = parsedQuiz.settings.timeQuiz - elapsedTime;

        if (remainingTime <= 0) {
            endQuizWithRemainingQuestions(parsedQuiz);
        } else {
            setTimeLeft(remainingTime);
            setQuestionStartTime(Date.now());
            startTimer();
        }
    }, [navigate]);

    const handleAnswer = (answer: string | null) => {
        if (!quizData) return;

        const currentQuestionIndex = quizData.currentQuestion;
        const currentTime = Date.now();
        const timeTaken = Math.floor((currentTime - questionStartTime) / 1000);

        const updatedAnswers = [...(quizData.answers || [])];
        updatedAnswers[currentQuestionIndex] = {
            question: quizData.questions[currentQuestionIndex],
            userAnswer: answer,
            timeTaken,
        };

        const newQuizData = {
            ...quizData,
            answers: updatedAnswers,
            currentQuestion: currentQuestionIndex + 1,
        };

        setQuizData(newQuizData);
        localStorage.setItem("unfinishedQuiz", JSON.stringify(newQuizData));

        if (newQuizData.currentQuestion >= quizData.questions.length) {
            endQuizWithRemainingQuestions(newQuizData);
        }
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    useEffect(() => {
        if (!quizData || !quizData.questions[quizData.currentQuestion]) return;

        const currentQuestion = quizData.questions[quizData.currentQuestion];
        const answers =
            currentQuestion.type === "boolean"
                ? ["True", "False"]
                : [
                    ...currentQuestion.incorrect_answers,
                    currentQuestion.correct_answer,
                ].sort(() => Math.random() - 0.5);

        setRandomizedAnswers(answers);
        setQuestionStartTime(Date.now());
    }, [quizData?.currentQuestion]);

    return {
        quizData,
        timeLeft,
        randomizedAnswers,
        handleAnswer,
        answers: quizData?.answers
    };
};