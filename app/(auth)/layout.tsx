"use client";

import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-x-14">
      <div className="lg:w-2/5 lg:block hidden h-screen">
        <Image
          width={1080}
          height={1920}
          src={`/login/login.jpg`}
          alt="logo"
          loading="lazy"
          className="w-full h-screen object-cover brightness-75 object-center"
        />
      </div>
      <div className="w-full  md:w-3/5 md:mt-10 mt-16">{children}</div>
    </div>
  );
}

export default AuthLayout;
