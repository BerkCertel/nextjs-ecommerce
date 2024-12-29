"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

function RegisterPage() {
  const formSchema = z.object({
    fullname: z.string().min(2, {
      message: "Full Name must be at least 2 characters.",
    }),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Invalid Email Adress.",
    }),
    birthDate: z.string().refine(
      (date) => {
        const birthDate = new Date(date);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        return age >= 18;
      },
      {
        message: "You must be at least 18 years old.",
      }
    ),
    startDate: z.string().refine(
      (date) => {
        const startDate = new Date(date);
        return startDate >= new Date();
      },
      {
        message: "You must be at least 18 years old.",
      }
    ),
    gender: z.enum(["Male", "Female", "Other"], {
      required_error: "Plase select a gender.",
    }),
    jobType: z.array(z.enum(["Remote", "Hybrid", "Office"])).min(1, {
      message: "You must be at select at least one job type.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      birthDate: "",
      startDate: "",
      gender: undefined,
      jobType: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-full p-10 md:p-0   md:w-4/5"
      >
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="validatLabel">Fullname</FormLabel>
              <FormControl>
                <Input placeholder="Fullname" {...field} />
              </FormControl>
              <FormMessage className="validatError" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="validatLabel">UserName</FormLabel>
              <FormControl>
                <Input placeholder="UserName" {...field} />
              </FormControl>
              <FormMessage className="validatError" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="validatLabel">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage className="validatError" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="validatLabel">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage className="validatError" />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-evenly items-center">
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="validatLabel">Birth Date</FormLabel>
                <FormControl>
                  <Input
                    className="w-36"
                    type="date"
                    placeholder="Birth Date"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="validatError" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="validatLabel">Start Date</FormLabel>
                <FormControl>
                  <Input
                    className="w-36"
                    type="date"
                    placeholder="Start Date"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="validatError" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col  md:flex-row w-full justify-evenly items-center space-x-4 space-y-4 ">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="validatLabel">Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    {...field}
                    className="flex flex-row space-x-1"
                  >
                    <RadioGroupItem value="Male" id="gender-male" />
                    <Label htmlFor="gender-male">Male</Label>
                    <RadioGroupItem value="Female" id="gender-female" />
                    <Label htmlFor="gender-female">Female</Label>
                    <RadioGroupItem value="Other" id="gender-other" />
                    <Label htmlFor="gender-other">Other</Label>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="validatError" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jobType"
            render={({ field }) => (
              <FormItem>
                <FormLabel id="jobType" className="validatLabel">
                  JobType
                </FormLabel>
                <FormControl>
                  <div className="space-x-2">
                    <Checkbox
                      checked={field.value.includes("Remote")}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, "Remote"]
                          : field.value.filter(
                              (value: string) => value !== "Remote"
                            );
                        field.onChange(newValue);
                      }}
                    />
                    <Label>Remote</Label>
                    <Checkbox
                      checked={field.value.includes("Hybrid")}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, "Hybrid"]
                          : field.value.filter(
                              (value: string) => value !== "Hybrid"
                            );
                        field.onChange(newValue);
                      }}
                    />
                    <Label>Hybrid</Label>
                    <Checkbox
                      checked={field.value.includes("Office")}
                      onCheckedChange={(checked) => {
                        const newValue = checked
                          ? [...field.value, "Office"]
                          : field.value.filter(
                              (value: string) => value !== "Office"
                            );
                        field.onChange(newValue);
                      }}
                    />
                    <Label>Office</Label>
                  </div>
                </FormControl>
                <FormMessage className="validatError" />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>

      <div className="mt-8 flex flex-col items-start justify-center space-y-3 p-10 md:p-0">
        <Label className="text-lg">Already an account ?</Label>
        <Link className="bg-two px-3 py-2 rounded-lg" href={"/login"}>
          Click Here Login
        </Link>
      </div>
    </Form>
  );
}

export default RegisterPage;
