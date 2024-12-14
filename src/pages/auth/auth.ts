import { AuthContext } from "@/firebase/auth-provider";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email!" }),
    password: z.string().min(6, {
        message: "Please enter the password!",
    }),
});

export const signUpSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email!" }),
    password: z.string().min(6, {
        message: "Password must be at least 4 characters!",
    }),
});

export const useAuthLogic = (wasSignUp: boolean) => {
    const { signIn, signUp } = useContext(AuthContext);

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(wasSignUp ? signUpSchema : loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmitLogin = async (values: z.infer<typeof loginSchema>) => {
        try {
            const { email, password } = values;
            toast({ duration: 500, title: "Loading...." });
            await signIn(email, password);
        } catch (error) {
            console.error(wasSignUp ? "SignUp error:" : "Login error:", error);
        }
    }

    const onSubmitRegister = async (values: z.infer<typeof signUpSchema>) => {
        try {
            const { email, password } = values;
            toast({ duration: 500, title: "Loading...." });
            await signUp(email, password);
        } catch (error) {
            console.error(wasSignUp ? "SignUp error:" : "Login error:", error);
        }
    }

    return { form, onSubmitLogin, onSubmitRegister }
}

