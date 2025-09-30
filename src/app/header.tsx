"use client";

import { useCallback } from "react";
import { useRouterHash } from "./hooks/useRouterHash";

export default function Header() {
  const hash = useRouterHash();

  const liStyle = useCallback(
    (target: string) => (hash === target ? "font-bold" : ""),
    [hash]
  );

  return (
    <header className="p-12 sticky">
      <div className="w-[6rem] h-[6rem] bg-lime-700 mb-4 hover:bg-sky-700">
        image will go here
      </div>
      <nav className="hover:bg-sky-700">
        <ul className="flex flex-wrap w-[12rem] gap gap-x-2 text-lg font-mono">
          <li className={liStyle("#about")}>
            <a href="/#about">
              <sup className={`text-xs mr-1 ${liStyle("#about")}`}>1</sup>
              about
            </a>
          </li>
          <li className={liStyle("#resume")}>
            <a href="/#resume" className="hover:bg-sky-700">
              <sup className={`text-xs mr-1 ${liStyle("#resume")}`}>2</sup>
              resume
            </a>
          </li>
          <li className={liStyle("#contact")}>
            <a href="/#contact">
              <sup className={`text-xs mr-1 ${liStyle("#contact")}`}>3</sup>
              contact
            </a>
          </li>
          <li className={liStyle("#random")}>
            <a href="/#random">
              <sup className={`text-xs mr-1 ${liStyle("#random")}`}>4</sup>
              random
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
