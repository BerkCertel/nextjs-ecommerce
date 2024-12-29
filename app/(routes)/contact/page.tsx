import AccordionExample from "@/components/AccordionExample";
import AlertDialogExample from "@/components/AlertDialogExample";
import React from "react";

function ContactPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-center justify-center p-5">
        <div className="w-full md:w-1/2">
          <AlertDialogExample />
        </div>
        <div className="w-full md:w-1/2">
          <AccordionExample />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
