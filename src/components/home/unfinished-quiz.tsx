import { Button } from "@/components/ui/button";

export const UnfinishedQuizCard = ({
  continueQuiz,
}: {
  continueQuiz: () => void;
}) => (
  <div className="flex-col flex font-semibold mt-4">
    You Have Unfinished Quiz!{" "}
    <Button
      variant="outline"
      className="text-maincol mt-2 text-white rounded-full bg-red-500 hover:bg-red-400 hover:text-white"
      onClick={continueQuiz}
    >
      Continue
    </Button>
  </div>
);
