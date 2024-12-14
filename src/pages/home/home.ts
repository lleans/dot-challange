import { APIURL } from "@/const";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

import { z } from "zod";
import { QuizData, QuizSettings } from "../quiz/quiz";

const QuizApiResponseSchema = z.object({
    response_code: z.number(),
    results: z.array(
        z.object({
            type: z.enum(["multiple", "boolean"]),
            difficulty: z.enum(["easy", "medium", "hard"]),
            category: z.string(),
            question: z.string(),
            correct_answer: z.string(),
            incorrect_answers: z.array(z.string()),
        })
    ),
});

const QuizQuestionSchema = QuizApiResponseSchema.shape.results.element;

type QuizApiResponse = z.infer<typeof QuizApiResponseSchema>;
type QuizQuestion = z.infer<typeof QuizQuestionSchema>;


async function fetchQuizData(amount: number, category?: number, difficulty?: 'easy' | 'medium' | 'hard', type?: 'multiple' | 'boolean'): Promise<QuizQuestion[] | string | undefined> {
    const response = await axios.get<QuizApiResponse>(APIURL, {
        params: {
            'amount': amount,
            'category': category ?? undefined,
            'difficulty': difficulty ?? undefined,
            'type': type ?? undefined
        }
    })

    const data: QuizApiResponse = response.data;

    if (data.response_code == 0) {
        return data.results
    } else {
        return "Error when fetching"
    }
}


// HOME LOGC
export function useHomeLogic() {
    const navigate = useNavigate();
    const { toast } = useToast();

    const [loading, setLoading] = useState(false);
    const [quizSettings, setQuizSettings] = useState<QuizSettings>({
        amount: 5,
        category: "",
        difficulty: "",
        type: "",
        timeQuiz: 10,
    });
    const [unfinishedQuiz, setUnfinishedQuiz] = useState(null);

    useEffect(() => {
        const savedQuiz = localStorage.getItem("unfinishedQuiz");
        if (savedQuiz) {
            setUnfinishedQuiz(JSON.parse(savedQuiz));
        }

        if (loading) {
            toast({
                title: "Loading.....",
                duration: 500
            })
        }
    }, [loading]);

    const handleAmountChange = (operation: "add" | "subtract") => {
        setQuizSettings((prev) => ({
            ...prev,
            amount:
                operation === "add"
                    ? Math.min(50, prev.amount + 1)
                    : Math.max(1, prev.amount - 1),
        }));
    };

    const handleStartQuiz = async () => {
        const { amount, category, difficulty, type } = quizSettings;
        setLoading(true);

        try {
            const res = await fetchQuizData(
                amount,
                category ? Number(category) : undefined,
                difficulty as "easy" | "medium" | "hard" | undefined,
                type as "multiple" | "boolean" | undefined
            );

            if (Array.isArray(res)) {
                const quizData: QuizData = {
                    questions: res,
                    currentQuestion: 0,
                    answers: [],
                    startTime: Date.now(),
                    settings: quizSettings,
                };

                localStorage.setItem("unfinishedQuiz", JSON.stringify(quizData));
                navigate("/quiz");
            } else {
                toast({
                    title: res || "Error fetching questions. Please try different settings.",
                    duration: 500,
                });
            }
        } catch (error) {
            console.error("Error fetching questions:", error);
            toast({
                title: "Error fetching questions. Please try again.",
                duration: 500,
            });
        } finally {
            setLoading(false);
        }
    };

    const continueQuiz = () => {
        navigate("/quiz");
    };

    return {
        loading,
        quizSettings,
        unfinishedQuiz,
        handleAmountChange,
        setQuizSettings,
        handleStartQuiz,
        continueQuiz,
    };
}
