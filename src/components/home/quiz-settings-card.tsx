import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { CATEGORIES } from "@/const";
import { ChevronsRight } from "lucide-react";

export const QuizSettingsCard = ({
  quizSettings,
  handleAmountChange,
  setQuizSettings,
  handleStartQuiz,
  loading,
}: {
  quizSettings: {
    amount: number;
    category: string;
    difficulty: string;
    type: string;
    timeQuiz: number;
  };
  handleAmountChange: (operation: "add" | "subtract") => void;
  setQuizSettings: React.Dispatch<
    React.SetStateAction<{
      amount: number;
      category: string;
      difficulty: string;
      type: string;
      timeQuiz: number;
    }>
  >;
  handleStartQuiz: () => void;
  loading: boolean;
}) => (
  <>
    <p className="[&:not(:first-child)]:mt-6 text-md">
      Change paramneters of quiz to generate
    </p>

    <div className="grid mx-auto justify-center gap-4 p-4 w-full sm:grid-cols-2 grid-cols-1 sm:w-auto">
      <Card className="flex flex-col col-span-1 rounded-[2.5rem] shadow-none justify-center items-center">
        <CardHeader>
          <CardTitle className="text-2xl">Total Question</CardTitle>
          <CardDescription className="text-sm">
            Enter total questions
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row justify-center items-center w-full gap-8">
          <Button
            className="flex items-center justify-center rounded-full p-12 lg:p-14 text-4xl md:p-8"
            onClick={() => handleAmountChange("subtract")}
          >
            -
          </Button>
          <h2 className="text-5xl">{quizSettings.amount}</h2>
          <Button
            className="flex items-center justify-center rounded-full p-12 lg:p-14 text-4xl md:p-8"
            onClick={() => handleAmountChange("add")}
          >
            +
          </Button>
        </CardContent>
      </Card>
      <Card className="flex flex-col col-span-1 rounded-[2.5rem] shadow-none justify-center items-center">
        <CardHeader>
          <CardTitle className="text-2xl">Category</CardTitle>
          <CardDescription className="text-sm">
            Select questions category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className="lg:p-16 lg:e-[250px] lg:text-3xl text-2xl md:p-16 p-12 font-semibold capitalize sm:w-auto rounded-full whitespace-normal break-words text-center"
              >
                {quizSettings.category
                  ? CATEGORIES.find(
                      (cat) => cat.id === parseInt(quizSettings.category)
                    )?.name
                  : "Any"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="h-96 overflow-auto">
              <DropdownMenuRadioGroup
                value={quizSettings.category}
                onValueChange={(value) =>
                  setQuizSettings((prev: any) => ({ ...prev, category: value }))
                }
              >
                {CATEGORIES.map((category) => (
                  <DropdownMenuRadioItem
                    key={category.id}
                    value={category.id.toString()}
                  >
                    {category.name}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>

      <Card className="flex flex-col col-span-1 rounded-[2.5rem] shadow-none justify-center items-center">
        <CardHeader>
          <CardTitle className="text-2xl">Difficulty</CardTitle>
          <CardDescription className="text-sm">
            Select questions difficulty
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className="lg:p-16 lg:e-[250px] lg:text-3xl text-2xl md:p-16 p-12 rounded-full font-semibold capitalize"
              >
                {quizSettings.difficulty || "Any"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup
                value={quizSettings.difficulty}
                onValueChange={(value) =>
                  setQuizSettings((prev: any) => ({
                    ...prev,
                    difficulty: value,
                  }))
                }
              >
                <DropdownMenuRadioItem value="">Any</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="random">
                  Random
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="easy">Easy</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="medium">
                  Medium
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="hard">Hard</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>

      <Card className="flex flex-col col-span-1 rounded-[2.5rem] shadow-none justify-center items-center">
        <CardHeader>
          <CardTitle className="text-2xl">Type</CardTitle>
          <CardDescription className="text-sm">
            Select questions type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className="lg:p-16 lg:e-[250px] lg:text-3xl text-2xl md:p-16 p-12 rounded-full font-semibold capitalize"
              >
                {quizSettings.type || "Any"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup
                value={
                  quizSettings.type == "boolean"
                    ? "True/False"
                    : quizSettings.type == "multiple"
                    ? "Multiple"
                    : ""
                }
                onValueChange={(value) =>
                  setQuizSettings((prev: any) => ({ ...prev, type: value }))
                }
              >
                <DropdownMenuRadioItem value="">Any</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="multiple">
                  Multiple Choice
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="boolean">
                  True/False
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>
    </div>

    <div className="space-y-4 mt-4">
      <span className="text-xl">Time limit for quiz:</span>
      <Input
        className="w-24 h-12 mx-auto text-center rounded-2xl"
        value={`${quizSettings.timeQuiz || 0}s`} // Append "s" to the value
        onChange={(e) => {
          let value = parseInt(e.target.value.replace(/\D/g, ""), 10) || 0; // Remove non-numeric characters
          if (value > 3600) value = 3600; // Cap the value at 3600 seconds (1 hour)
          setQuizSettings((prev: any) => ({
            ...prev,
            timeQuiz: value,
          }));
        }}
        placeholder="Seconds"
        type="text" // Change to text to allow appending "s"
        onFocus={(e) => e.target.select()} // Optional: Auto-select the value on focus
      />

      <Button
        className="rounded-full p-8"
        variant="default"
        size="icon"
        onClick={handleStartQuiz}
        disabled={loading}
      >
        <ChevronsRight />
      </Button>
    </div>
  </>
);
