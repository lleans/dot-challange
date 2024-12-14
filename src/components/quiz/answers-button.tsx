import { Button } from "@/components/ui/button";

export const AnswerButton = ({
  answers,
  continueQuiz,
}: {
  answers: string[];
  continueQuiz: (answer: string | null) => void;
}) => (
  <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 place-items-center">
    {answers.map((answer, index) => (
      <Button
        key={index}
        className="w-full h-fulll p-20 rounded-[2.5rem] shadow-none items-center justify-center whitespace-normal break-all text-center"
        onClick={() => continueQuiz(answer)}
        variant="outline"
      >
        <div className="text-center p-0">
          <h1
            className="text-3xl break-words overflow-wrap break-word"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      </Button>
    ))}
  </div>
);
