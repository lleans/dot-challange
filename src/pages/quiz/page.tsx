import { AnswerButton } from "@/components/quiz/answers-button";
import { QuestionDisplay } from "@/components/quiz/questions-display";
import { Timer } from "@/components/quiz/timer";
import { useQuizLogic } from "./quiz";

function Quiz() {
  const { quizData, timeLeft, randomizedAnswers, handleAnswer } =
    useQuizLogic();

  if (!quizData || !quizData.questions[quizData.currentQuestion]) return null;

  const currentQuestion = quizData.questions[quizData.currentQuestion];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <QuestionDisplay
          question={currentQuestion.question}
          category={currentQuestion.category}
          type={currentQuestion.type}
          questionNumber={quizData.currentQuestion + 1}
          totalQuestions={quizData.questions.length}
        />

        <br />

        <AnswerButton answers={randomizedAnswers} continueQuiz={handleAnswer} />

        <br />

        <Timer timeLeft={timeLeft} />
      </div>
    </>
  );
}

export default Quiz;
