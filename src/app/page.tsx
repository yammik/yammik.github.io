import Image from "next/image";

export default function Home() {
  return (
    <main className="w-1/2 p-12 pt-0 flex justify-between">
      <div>
        <div className="pb-[4rem]">
          <h1 className="text-3xl font-black">
            hi –
            <span className="block" />
            i am
            <span className="block" />
            may.
          </h1>
        </div>
        <div className="leading-8 flex flex-col gap-y-20">
          <div id="about">
            <p>
              I build backend systems and full-stack apps, mostly in Go, AWS,
              and React/TypeScript. I like turning tricky infra problems into
              simple, reliable tools.
              <br />
              Sometimes I ship features end-to-end; sometimes I dig into
              observability and scaling.
              <br />
              This site is just a place to share what I’m working on.
            </p>
          </div>
          <div id="resume">
            <p>This is my resume.</p>
          </div>
          <div id="contact">
            <p>Hit me up for a chat?</p>
          </div>
          <div id="random">
            <p>Non-work stuff I'm into</p>
          </div>
        </div>
      </div>
      <div>
        <div className="fixed bottom-0 right-[10%] w-[22rem] h-[22rem] bg-lime-700"></div>
      </div>
    </main>
  );
}
