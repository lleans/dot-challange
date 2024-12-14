import { QuizAnswer, QuizData } from "@/pages/quiz/quiz";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";

export const QuestionResult = ({ results }: { results: QuizData }) => {
  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 place-items-center">
      {results.answers.map((answer: QuizAnswer, index: number) => {
        const isCorrect = answer.userAnswer === answer.question.correct_answer;
        return (
          <Card
            className={`rounded-[2.5rem] 
            border 
            transition-all 
            duration-300 
            outline
            outline-1
            ${isCorrect ? "outline-green-400" : "outline-red-400"}
            hover:shadow-lg 
             ${
               isCorrect
                 ? "light:hover:shadow-green-100/50 dark:hover:shadow-green-900"
                 : "light:hover:shadow-red-100/50 dark:hover:shadow-red-900"
             }
            hover:scale-[1.02] 
            ${isCorrect ? "hover:border-green-400 " : "hover:border-red-400 "}
            w-full 
            h-full 
            flex 
            flex-col`}
          >
            <CardHeader>
              <CardDescription>
                <p>Questions number {index + 1}</p>
              </CardDescription>
              <CardTitle
                className="text-3xl"
                dangerouslySetInnerHTML={{ __html: answer.question.question }}
              ></CardTitle>
              <CardDescription>
                <h4 className="text-md">
                  Category{" "}
                  <b
                    dangerouslySetInnerHTML={{
                      __html: answer.question.category,
                    }}
                  />
                </h4>
                <h5 className="text-sm text-gray-500">
                  {answer.question.type === "boolean"
                    ? "True/False"
                    : "Multiple"}
                </h5>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center flex-col flex-grow">

              <h3 className="font-bold text-xl">Your answer</h3>
              <p
                className="line-clamp-3"
                dangerouslySetInnerHTML={{ __html: answer.userAnswer ?? "" }}
              ></p>

              <Separator className="my-5" />

              <h3 className="underline font-bold text-green-600 text-xl">
                Right answer!
              </h3>
              <p
                className="line-clamp-3"
                dangerouslySetInnerHTML={{
                  __html: answer.question.correct_answer ?? "",
                }}
              ></p>
            </CardContent>
            <CardFooter className="justify-center items-center">
              <small className="text-gray-500">
                Times taken{" "}
                <b className="text-black dark:text-gray-400 underline">{answer.timeTaken}s</b>
              </small>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
