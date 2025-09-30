"use client";

export default function Home() {
  return (
    <main className="w-2/3 p-12 pt-0 flex justify-between">
      <div className="h-[calc(100dvh-20rem)] leading-8 gap-y-20 overflow-scroll no-scrollbar z-1 items-stretch scroll-smooth">
        <div id="about" className="h-[calc(100dvh-20rem)]">
          <div className="pb-[4rem]">
            <h1 className="text-3xl font-black">
              hello,
              <span className="block" />
              i am
              <span className="block" />
              may.
            </h1>
          </div>
          <p>
            I build frontend and backend, and cloud infrastructure.
            <br />
            My work includes shipping features end-to-end, with a side of
            observability and scaling.
            <br />
            This site is just a place to share what I’m working on.
          </p>
        </div>

        <div id="resume" className="h-[calc(100dvh-20rem)]">
          <p>This is my resume.</p>
          <p>
            I've published two scientific research papers in peer-reviewed
            journals:
          </p>
          <ol>
            <li>SC paper</li>
            <li>Staphylococcus spp. paper</li>
          </ol>
          And an illustration in a colleague's publication as well: (Lucia's
          paper)
        </div>
        <div id="contact" className="h-[calc(100dvh-20rem)]">
          <p>Hit me up for a chat?</p>
        </div>
        <div id="random" className="h-[calc(100dvh-20rem)]">
          <p>Non-work stuff I'm into</p>
        </div>
      </div>
      <div>
        <div className="grid fixed bottom-0 right-[10%] w-[22rem] h-[22rem] bg-lime-700 z-0"></div>
      </div>
    </main>
  );
}
