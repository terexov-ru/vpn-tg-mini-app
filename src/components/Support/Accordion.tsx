"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function Accordion({
  items,
}: {
  items: { title: string; content: string }[];
}) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
    >
      {items.map((item, index) => (
        <AccordionPrimitive.Item
          key={index}
          value={item.title}
          className="rounded-lg mb-2 bg-[#ffffff17] px-3 py-4 border-none"
        >
          <AccordionPrimitive.Trigger className="flex justify-between items-center w-full text-left text-white text-[15px]/5 font-medium">
            {item.title}
            <ChevronDown className="w-5 h-5 transition-transform duration-300" />
          </AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content className="pt-[14px] text-gray-300 font-normal text-sm/[21px]">
            {item.content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
