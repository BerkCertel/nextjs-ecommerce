import React from "react";
import Header from "./_components/Menu/Header";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/toaster";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

function RoutesLayout({ children }: RoutesLayoutProps) {
  return (
    <>
      <Header />
      <Toaster />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
}

export default RoutesLayout;
