import { AnimationContainer } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/utils/constants/faq";
import React from "react";

const HelpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
          Help
        </h1>
        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
          Need help? We got you.
        </p>
      </AnimationContainer>
      <AnimationContainer delay={0.3}>
        <div className="w-full">
          <div className="flex flex-col items-center justify-center w-full pt-12">
            <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-lg mt-6 text-center text-neutral-500">
              Here are some of the most common questions we get asked. If you
              have a question that isn&apos;t answered here, feel free to reach
              out to us.
            </p>
          </div>
          <div className="max-w-3xl mx-auto w-full mt-20">
            <Accordion type="single" collapsible>
              {FAQ.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default HelpPage;
