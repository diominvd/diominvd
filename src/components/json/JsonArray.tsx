"use client";
import React, { useState } from "react";
import { JsonArrow } from "./JsonArrow";
import { capitalize } from "@/utils/capitalize";

interface JsonArrayProps {
  label?: string;
  children: React.ReactNode;
}

export function JsonArray({ label, children }: JsonArrayProps) {
  const [open, setOpen] = useState(false);
  const childArray = React.Children.toArray(children);

  return (
    <span className="primary-text relative text-[14px]">
      {label && (
        <>
          <JsonArrow isOpened={open} onClick={() => setOpen((v) => !v)} />
          <span>"{capitalize(label)}": </span>
        </>
      )}
      {open ? (
        <>
          [<br />
            <span className="secondary-text block pl-[24px]">
              {childArray.map((child, idx) => (
                <span key={idx}>
                  {child}
                  {idx < childArray.length - 1 && <span className="primary-text"> , </span>}
                </span>
              ))}
            </span>
          ]
        </>
      ) : (
        <>
          <span className="primary-text">{"["}</span>
          <span className="secondary-text">{" ... "}</span>
          <span className="primary-text">{"]"}</span>
        </>
      )}
    </span>
  );
}
