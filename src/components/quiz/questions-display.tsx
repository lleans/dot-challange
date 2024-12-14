export const QuestionDisplay = ({
  question,
  category,
  type,
  questionNumber,
  totalQuestions,
}: {
  question: string;
  category: string;
  type: string;
  questionNumber: number;
  totalQuestions: number;
}) => (
  <>
    <p>
      Questions {questionNumber} of {totalQuestions}
    </p>
    <h1
      className="scroll-m-20 pb-2 text-3xl font-extrabold tracking-tight lg:text-6xl "
      dangerouslySetInnerHTML={{ __html: question }}
    />

    <h4 className="mt-4 text-lg">
      Category <b dangerouslySetInnerHTML={{ __html: category }} />
    </h4>
    <h5 className="text-md text-gray-600">
      {type === "boolean" ? "True/False" : "Multiple"}
    </h5>
  </>
);
