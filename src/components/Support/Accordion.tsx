"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function Accordion({
  items,
}: {
  items: { title: string; content: string }[];
}) {
  return (
    <AccordionPrimitive.Root type="single" collapsible>
      {items.map((item, index) => (
        <AccordionPrimitive.Item
          key={index}
          value={item.title}
          className="rounded-lg mb-2 bg-[#ffffff17] px-3 py-4 border-none overflow-hidden focus-within:relative last:mb-0 "
        >
          <AccordionPrimitive.Trigger className="group flex justify-between items-center w-full text-left text-white text-[15px]/5 font-medium outline-none">
            {item.title}
            <ChevronDown className="w-5 h-5 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180 shrink-0" />
          </AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content className="text-gray-300 font-normal text-sm/[21px] overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <div className="pt-[14px]">{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
