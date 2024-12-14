import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const WelcomeBanner = ({
  user,
  signOut,
}: {
  user: any;
  signOut: () => void;
}) => (
  <>
    <h1 className="scroll-m-20 pb-2 text-5xl font-extrabold tracking-tight lg:text-8xl underline decoration-3 ">
      Trivia Quiz
    </h1>

    {!user && (
      <div className="flex justify-center space-x-4 mt-4">
        <Link to={"/auth"} className="self-center">
          <Button className="text-sm py-1 px-3 rounded-full text-md p-4 border-[1px]">
            Login or Register
          </Button>
        </Link>
      </div>
    )}
    {user && (
      <h2 className="mt-4">
        Hello <b className="underline underline-1">{user.email}</b>
      </h2>
    )}
    {user && (
      <div className="flex justify-center space-x-4 mt-4">
        <Link to={"/auth"} className="self-center">
          <Button
            variant="outline"
            className="text-sm py-1 px-3 rounded-full text-md p-4"
            onClick={signOut}
          >
            Log out
          </Button>
        </Link>
      </div>
    )}
  </>
);
