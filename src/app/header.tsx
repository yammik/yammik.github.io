"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

export default function Header() {
  const [hash, setHash] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);

      const handleHashChange = () => {
        console.log("hash changed");
        setHash(window.location.hash);
      };

      window.addEventListener("hashchange", handleHashChange);

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, [setHash]);
  console.log(hash);

  const liStyle = useCallback(
    (target: string) => (hash === target ? "font-bold" : ""),
    [hash]
  );

  return (
    <header className="p-12 sticky">
      <nav>
        <div className="w-[6rem] h-[6rem] bg-lime-700 mb-4">
          image will go here
        </div>
        <ul className="flex flex-wrap w-[12rem] gap gap-x-2 text-lg font-mono">
          <li className={liStyle("#about")}>
            <Link href="/#about" scroll={false}>
              <sup className="font-extralight text-xs mr-1">1</sup>
              about
            </Link>
          </li>
          <li className={liStyle("#resume")}>
            <Link href="/#resume" scroll={false}>
              <sup className="font-extralight text-xs mr-1">2</sup>
              resume
            </Link>
          </li>
          <li className={liStyle("#contact")}>
            <Link href="/#contact" scroll={false}>
              <sup className="font-extralight text-xs mr-1">3</sup>
              contact
            </Link>
          </li>
          <li className={liStyle("#random")}>
            <Link href="/#random" scroll={false}>
              <sup className="font-extralight text-xs mr-1">4</sup>
              random
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
