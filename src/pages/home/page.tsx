import { useContext } from "react";
import { AuthContext } from "@/firebase/auth-provider";
import { Separator } from "@/components/ui/separator";
import { WelcomeBanner } from "@/components/home/welcome-banner";
import { UnfinishedQuizCard } from "@/components/home/unfinished-quiz";
import { QuizSettingsCard } from "@/components/home/quiz-settings-card";
import { useHomeLogic } from "./home";

function Home() {
  const { user, signOut } = useContext(AuthContext);
  const {
    loading,
    quizSettings,
    unfinishedQuiz,
    handleAmountChange,
    setQuizSettings,
    handleStartQuiz,
    continueQuiz,
  } = useHomeLogic();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <WelcomeBanner user={user} signOut={signOut} />

        <Separator className="mt-6" />

        {unfinishedQuiz && <UnfinishedQuizCard continueQuiz={continueQuiz} />}

        <QuizSettingsCard
          quizSettings={quizSettings}
          handleAmountChange={handleAmountChange}
          setQuizSettings={setQuizSettings}
          handleStartQuiz={handleStartQuiz}
          loading={loading}
        />
      </div>
    </>
  );
}

export default Home;
