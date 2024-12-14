"use client";

import { AuthForm } from "@/components/auth/auth-form";
import { AuthContext } from "@/firebase/auth-provider";
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthLogic } from "./auth";

export default function Auth() {
  const [currAuth, setAuth] = useState<"login" | "signup">("login");

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (user) navigate("/");

  const handleChangeAuth = () => {
    setAuth(currAuth === "login" ? "signup" : "login");
  };

  const { form, onSubmitLogin, onSubmitRegister } = useAuthLogic(
    currAuth === "signup"
  );

  return (
    <AuthForm
      wasSignUp={currAuth === "signup"}
      authFn={handleChangeAuth}
      form={form}
      onSubmitLogin={onSubmitLogin}
      onSubmitRegister={onSubmitRegister}
    />
  );
}
