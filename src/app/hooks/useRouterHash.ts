"use client";

import { useEffect, useState } from "react";

export function useRouterHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);

      const handleHashChange = () => {
        console.log("changed");
        setHash(window.location.hash);
      };

      window.addEventListener("hashchange", handleHashChange);

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, [setHash]);

  return hash;
}
