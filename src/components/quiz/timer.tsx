export const Timer = ({ timeLeft }: { timeLeft: number }) => (
  <h2 className="leading-8 text-4xl underline underline-offset-auto font-thin">
    {timeLeft >= 60
      ? `${Math.floor(timeLeft / 60)}m ${timeLeft % 60}s`
      : `${timeLeft}s`}
  </h2>
);
