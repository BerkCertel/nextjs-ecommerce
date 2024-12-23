import React from "react";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

function RoutesLayout({ children }: RoutesLayoutProps) {
  return (
    <div>
      Header
      {children}
      Footer
    </div>
  );
}

export default RoutesLayout;
