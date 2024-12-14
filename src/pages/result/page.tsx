import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronsLeft } from "lucide-react";
import { QuestionResult } from "@/components/result/questions-answers";
import { ResultHeader } from "@/components/result/result-header";
import { useResultLogic } from "./result";

function Result() {
  const resultData = useResultLogic();

  if (!resultData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading results...</p>
      </div>
    );
  }

  const { accuracy, correctAnswers, results } = resultData;

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <ResultHeader
          correctAnswersCount={correctAnswers}
          questionsCount={results.questions.length}
          accuracy={accuracy}
        />

        <br />

        <QuestionResult results={results} />

        <br />

        <Link to={"/"}>
          <Button className="rounded-full p-8" variant="default" size="icon">
            <ChevronsLeft />
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Result;
