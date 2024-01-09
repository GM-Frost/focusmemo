"use client";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, set, useForm } from "react-hook-form";

import * as z from "zod";
import { FormSchema } from "@/lib/types";
import { useRouter } from "next/navigation";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/Logo.svg";
const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData
  ) => {};

  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) setSubmitError("");
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"
      >
        <Link href={"/"} className="w-full flex justify-left items-center ml-2">
          <Image src={Logo} alt="FocusMemo Logo" width={100} height={100} />
        </Link>
      </form>
    </Form>
  );
};

export default LoginPage;
