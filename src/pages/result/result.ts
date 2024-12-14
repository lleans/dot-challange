import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizAnswer, QuizData } from "../quiz/quiz";

export const useResultLogic = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState<QuizData | null>(null);

    useEffect(() => {
        const savedResults = localStorage.getItem("quizResults");
        console.log('iki soko result', savedResults);
        if (!savedResults) {
            navigate("/");
            return;
        }

        setResults(JSON.parse(savedResults));
    }, [navigate]);

    if (!results) return null;

    const correctAnswers = results.answers.filter(
        (answer: QuizAnswer) => answer.userAnswer === answer.question.correct_answer
    ).length;

    const accuracy = ((correctAnswers / results.questions.length) * 100).toFixed(
        1
    );

    return { accuracy, correctAnswers, results };
}