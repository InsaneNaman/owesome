"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

// constants
import { DEFAULT_FAQS } from "./index.constants";

export default function FAQs() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion className="py-8 lg:py-12">
      {DEFAULT_FAQS.map((faq, i) => (
        <AccordionItem key={i} aria-label={faq.question} title={faq.question}>
          {faq.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
