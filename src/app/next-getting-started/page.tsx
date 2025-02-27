import Image from "next/image";

export default function Page() {
  return (
    <div
      className="min-h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center
        p-8 sm:p-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]"
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
        />
        <ol
          className="list-inside list-decimal text-sm text-center
        font-[family-name:var(--font-geist-mono)] sm:text-left"
        >
          <li className="mb-2">
            Get started by editing{" "}
            <code
              className="bg-black/[.05] px-1 py-0.5 rounded
            font-semibold dark:bg-white/[.06]"
            >
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="h-10 px-4 border border-solid border-transparent
            bg-foreground rounded-full text-background flex items-center justify-center
            gap-2 text-sm hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors
            sm:text-base sm:h-12 sm:px-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="h-10 rounded-full border border-solid border-black/[.08] px-4
            text-sm flex items-center justify-center hover:bg-[#f2f2f2] dark:border-white/[.145]
            dark:hover:bg-[#1a1a1a] transition-colors hover:border-transparent
            sm:h-12 sm:px-5 sm:min-w-44 sm:text-base"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
