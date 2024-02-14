"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const name = "hello";
  const domain = "maykim.me";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono">
      <div
        className="z-10 max-w-5xl w-full items-center justify-between text-sm"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "4.6em auto auto auto",
          alignItems: "stretch",
          rowGap: "8.8em"
        }}
      >
        <div style={{ gridColumnStart: 1, gridRowStart: 1 }}>
          <p>Welcome to May's place</p>
        </div>
        <div
          style={{ gridColumnStart: 2, gridRowStart: 1 }}
          className="fixed bottom-0 left-0 h-48 items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none"
        >
          <p>Menu</p>
          <p>Will go</p>
          <p>Here</p>
        </div>
        <div
          style={{
            gridRowStart: 2,
            gridColumnStart: 1,
            gridColumnEnd: 3,
            display: "flex",
            gap: "4em",
            justifyContent: "center"
          }}
        >
          <Image
            src="/yammik.github.io/penguin_smart.png"
            alt="Corgi with glasses"
            width={360}
            height={360}
            style={{
              objectFit: "cover"
            }}
            priority
          />
          <Image
            src="/yammik.github.io/blue_smart.png"
            alt="Fluffy corgi with glasses"
            width={360}
            height={360}
            style={{
              objectFit: "cover"
            }}
            priority
          />
        </div>
        <div
          style={{
            gridRowStart: 3,
            gridColumnStart: 2
          }}
        >
          <h3>!! UNDER CONSTRUCTION !!</h3>
          <p>
            Pardon this appearance! I'm in the process of updating my website.
            In the meantime, here are my dogs wearing my glasses and my bio
            below those.
          </p>
          <p>Thanks for visiting, come back soon!</p>
        </div>
        <div
          style={{
            gridRowStart: 4,
            gridColumnStart: 2
          }}
        >
          <h2 style={{ fontSize: "x-large" }}>About May</h2>
          <br />
          <br />
          <br />
          <h3>May the developer</h3>
          <p>
            I am a full stack engineer at Parsec at Unity. I write frontend and
            backend code, and maintain cloud services infrastructure.
          </p>
          <br />
          <br />
          <h3>May the person</h3>
          <p>
            When I started having more fun making browser widgets and laboratory
            gadgets than doing actual research in my microbiology PhD program, I
            decided software engineering was a good path forward for me. I
            finished a coding bootcamp called Flatiron in NYC and became one of
            the early members of Parsec. I've contributed to taking the team
            from a small startup to acquisition by Unity.
          </p>
          <br />
          <p>
            I’ve contributed to all stack at Parsec, as well as building out
            internal metrics tools that others can use to improve their
            workflow. I enjoy working on the whole process of building an app,
            front to back. While I enjoy being a generalist, my involvement in a
            diverse range of projects led me to value having domain knowledge
            expertise as well as the ability to collaborate effectively in
            cross-functional teams.
          </p>
          <br />
          <p>
            If you'd like to get in touch, hit me up for a chat at{" "}
            <a
              id="mlink"
              href="#"
              onMouseEnter={() => {
                const elink = document.getElementById("mlink");
                elink?.setAttribute("href", `mailto:${name}@${domain}`);
              }}
              onMouseLeave={() => {
                const elink = document.getElementById("mlink");
                elink?.setAttribute("href", "#");
              }}
            >
              {name}@{domain}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
