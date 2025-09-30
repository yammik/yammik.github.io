"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useRouterHash() {
  const [hash, setHash] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);

      const handleHashChange = () => {
        setHash(window.location.hash);
      };

      window.addEventListener("hashchange", handleHashChange);

      const handleKeypress = (e: KeyboardEvent) => {
        switch (e.key) {
          case "1":
            router.replace("/#about");
            setHash("#about");
            break;
          case "2":
            router.replace("/#resume");
            setHash("#resume");
            break;
          case "3":
            router.replace("/#contact");
            setHash("#contact");
            break;
          case "4":
            router.replace("/#random");
            setHash("#random");
            break;
        }
      };
      window.addEventListener("keydown", handleKeypress);

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
        window.removeEventListener("keydown", handleKeypress);
      };
    }
  }, [setHash]);

  return hash;
}
