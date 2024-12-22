import React from "react";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

function RoutesLayout({ children }: RoutesLayoutProps) {
  return (
    <>
      Header
      {children}
      Footer
    </>
  );
}

export default RoutesLayout;
