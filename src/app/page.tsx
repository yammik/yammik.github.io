"use client";

import Image from "next/image";

// import resumePdf from "./may_kim_resume_2025.pdf";

export default function Home() {
  return (
    <main className="w-2/3 p-12 pt-0 flex justify-between">
      <div className="grid h-[calc(100dvh-20rem)] leading-8 gap-y-32 overflow-scroll no-scrollbar z-1 scroll-smooth">
        <div id="about" className="h-[calc(100dvh-20rem)]">
          <div className="pb-[4rem]">
            <h1 className="text-3xl font-black">
              hello,
              <span className="block" />
              i am
              <span className="block" />
              may.
            </h1>
            <p>
              (Under a bit of a construction, thanks for bearing with me. d:) )
            </p>
          </div>
          <p>
            I build frontend and backend, and cloud infrastructure.
            <br />
            My work includes shipping features end-to-end, with a side of
            observability and scaling.
            <br />
            This site is just a place to share a bit of what I’m about.
          </p>
        </div>

        <div id="resume" className="min-h-[calc(100dvh-20rem)]">
          <p>
            You can download my resume{" "}
            <a
              className="underline"
              href="https://raw.githubusercontent.com/yammik/yammik.github.io/93a5c29e15c5ae2dff005cb9d87b5de04bf98f84/public/may_kim_resume_2025.pdf"
              type="application/pdf"
            >
              here
            </a>
            .
          </p>
          <br />
          <p>
            Unrelated to coding, I've published two scientific research papers
            in peer-reviewed journals:
          </p>
          <ol className="text-xs leading-8">
            <li>
              <strong>
                LB789 Stratum corneum lipid composition alters the heterogeneous
                growth of <em>Staphylococcus aureus</em>. (2016)
              </strong>
              <p>
                DOI:
                <a
                  className="underline"
                  href="https://www.jidonline.org/article/S0022-202X(16)31194-0/fulltext"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  10.1016/j.jid.2016.05.040
                </a>
              </p>
            </li>
            <li>
              <strong>
                Heterogeneous ceramide distributions alter spatially resolved
                growth of <em>Staphylococcus aureus</em> on human stratum
                corneum. (2018)
              </strong>
              <p>
                DOI:
                <a
                  className="underline"
                  href="https://pubmed.ncbi.nlm.nih.gov/29669890/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  10.1098/rsif.2017.0848
                </a>
              </p>
            </li>
            <li>
              <strong>
                Effect of sphingosine and inoculum concentrations on
                <em>Staphylococcus aureus</em> and{" "}
                <em>Staphylococcus epidermidis</em> biofilms. (2023)
              </strong>
              <p>
                DOI:
                <a
                  className="underline"
                  href="https://www.tandfonline.com/doi/full/10.1080/08927014.2023.2236584"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  10.1080/08927014.2023.2236584
                </a>
              </p>
            </li>
          </ol>
        </div>
        <div id="contact" className="h-[calc(100dvh-20rem)]">
          <p>
            You can reach me at my email:{" "}
            <a className="underline" href="mailto:hello@maykim.me">
              hello@maykim.me
            </a>
            .
          </p>
        </div>
        <div id="random" className="h-[calc(100dvh-20rem)]">
          <p>Non-work stuff I'm into</p>
          <p>I'm a pottery hobbyist. I like making moon jars.</p>
          <Image
            className="mb-4"
            src="/static/images/mini_pots.jpeg"
            alt="miniature pottery"
            width={400}
            height={400}
          />
          <Image
            src="/static/images/moon_jars.jpeg"
            alt="moon jars"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div>
        <div className="grid fixed bottom-0 right-[10%] w-[22rem] h-[22rem] bg-lime-700 z-0"></div>
      </div>
    </main>
  );
}
