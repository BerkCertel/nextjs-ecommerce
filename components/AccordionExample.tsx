import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sssList } from "@/constans";

function AccordionExample() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {sssList?.map((item, i) => (
        <AccordionItem value={item?.id} key={i}>
          <AccordionTrigger>{item?.title}</AccordionTrigger>
          <AccordionContent>{item?.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionExample;
