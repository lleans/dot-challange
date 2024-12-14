export const ResultHeader = ({
  correctAnswersCount,
  questionsCount,
  accuracy,
}: {
  correctAnswersCount: number;
  questionsCount: number;
  accuracy: string;
}) => {
  return (
    <>
      <h1 className="scroll-m-20 pb-2 text-5xl font-extrabold tracking-tight lg:text-8xl underline underline-offset-auto decoration-3">
        Quiz Result
      </h1>

      <h3 className="text-3xl mt-4">
        <b className="text-green-600">{correctAnswersCount}</b> out of{" "}
        <b>{questionsCount}</b>
      </h3>

      <br />

      <h4 className="mt-2 text-lg">Your accuracy</h4>
      <h2 className="text-5xl mt-2 font-thin underline decoration-2 tracking-tighter text-gray-600 dark:text-gray-100 text-bold">
        {accuracy}%
      </h2>
    </>
  );
};
