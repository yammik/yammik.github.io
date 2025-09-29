import Image from "next/image";

export default function Home() {
  return (
    <main className="w-2/3 p-12 pt-0 flex justify-between">
      <div className="h-124 leading-8 flex flex-col gap-y-20 no-scrollbar">
        <div id="about">
          <div className="pb-[4rem]">
            <h1 className="text-3xl font-black">
              hi –
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

        <div id="resume">
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
        <div id="contact">
          <p>Hit me up for a chat?</p>
        </div>
        <div id="random">
          <p>Non-work stuff I'm into</p>
        </div>
      </div>
      <div>
        <div className="fixed bottom-0 right-[10%] w-[22rem] h-[22rem] bg-lime-700"></div>
      </div>
    </main>
  );
}
