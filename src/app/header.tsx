"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useRouterHash } from "./hooks/useRouterHash";
import dynamic from "next/dynamic";

export default function Header() {
  const hash = useRouterHash();

  const liStyle = useCallback(
    (target: string) => (hash === target ? "font-bold" : ""),
    [hash]
  );

  return (
    <header className="p-12 sticky">
      <div className="w-[6rem] h-[6rem] bg-lime-700 mb-4">
        image will go here
        {hash}
      </div>
      <nav>
        <ul className="flex flex-wrap w-[12rem] gap gap-x-2 text-lg font-mono">
          <li className={liStyle("#about")}>
            <a href="/#about">
              <sup className="font-extralight text-xs mr-1">1</sup>
              about
            </a>
          </li>
          <li className={liStyle("#resume")}>
            <a href="/#resume">
              <sup className="font-extralight text-xs mr-1">2</sup>
              resume
            </a>
          </li>
          <li className={liStyle("#contact")}>
            <a href="/#contact">
              <sup className="font-extralight text-xs mr-1">3</sup>
              contact
            </a>
          </li>
          <li className={liStyle("#random")}>
            <a href="/#random">
              <sup className="font-extralight text-xs mr-1">4</sup>
              random
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
