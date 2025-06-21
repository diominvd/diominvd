"use client";
import React, { useState } from "react";
import { JsonArrow } from "./JsonArrow";
import { capitalize } from "@/utils/capitalize";

interface JsonObjectProps {
  label?: string;
  children: React.ReactNode;
}

export function JsonObject({ label, children }: JsonObjectProps) {
  const [open, setOpen] = useState(true);
  const childArray = React.Children.toArray(children);

  return (
    <div className="relative text-[14px]">
      {label && (
        <>
          <JsonArrow isOpened={open} onClick={() => setOpen((v) => !v)} />
          <span className="primary-text">"{capitalize(label)}": </span>
        </>
      )}
      {open ? (
        <span>
          <span className="primary-text">{"{"}</span>
          <div className="pl-[24px]">
            {childArray.map((child, idx) => (
              <span key={idx}>
                {idx > 0 && <br />}
                {child}
                {idx < childArray.length - 1 && <span className="primary-text"> , </span>}
              </span>
            ))}
            <br />
          </div>
          <span className="primary-text">{"}"}</span>
        </span>
      ) : (
        <>
          <span className="primary-text">{"{"}</span>
          <span className="secondary-text">{" ... "}</span>
          <span className="primary-text">{"}"}</span>
        </>
      )}
    </div>
  );
}
