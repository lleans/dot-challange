import { ChevronsLeft } from "lucide-react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { loginSchema, signUpSchema } from "@/pages/auth/auth";
import { z } from "zod";

export const AuthForm = ({
  wasSignUp,
  form,
  onSubmitRegister,
  onSubmitLogin,
  authFn,
}: {
  wasSignUp: boolean;
  form: UseFormReturn<any>;
  onSubmitRegister: (values: z.infer<typeof signUpSchema>) => Promise<void>;
  onSubmitLogin: (values: z.infer<typeof loginSchema>) => Promise<void>;
  authFn: () => void;
}) => {
  return (
    <div className="space-y-20 flex flex-col justify-center items-center">
      <h1 className="scroll-m-20 pb-2 text-5xl font-extrabold tracking-tight lg:text-8xl underline decoration-3 dark:bg-gradient-to-br">
        {wasSignUp ? "Register" : "Login"}
      </h1>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(
            wasSignUp ? onSubmitRegister : onSubmitLogin
          )}
          className="space-y-8 
                  w-full 
                  max-w-[280px] 
                  sm:max-w-[350px] 
                  md:max-w-[400px] 
                  lg:max-w-[500px] 
                  px-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-start">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-start">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-center items-center space-y-2">
            <p>
              {wasSignUp
                ? "Already have an account?"
                : "Don't have an account?"}
            </p>
            <Button
              type="button"
              className="ml-2"
              variant="outline"
              onClick={() => {
                authFn();
              }}
            >
              {wasSignUp ? "Login" : "Register"}
            </Button>
          </div>
          <Button type="submit">{wasSignUp ? "Register" : "Login"}</Button>
        </form>
      </FormProvider>

      <br />

      <Link to={"/"}>
        <Button className="rounded-full p-8" variant="default" size="icon">
          <ChevronsLeft />
        </Button>
      </Link>
    </div>
  );
};
