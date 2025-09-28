import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full p-12 pt-0 flex justify-between">
      <div>
        <h1 className="text-3xl">
          hi,
          <span className="block" />
          i am
          <span className="block" />
          may.
        </h1>
      </div>
      <div>
        <div className="fixed bottom-0 right-[10%] w-[22rem] h-[22rem] bg-lime-700"></div>
      </div>
    </main>
  );
}
