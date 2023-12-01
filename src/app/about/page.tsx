import { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";

import { heroes, tools } from "@/config/constants";
import { siteConfig } from "@/config/site";
import { cn, shuffle } from "@/lib/utils";
import EasterEgg from "./easter-egg";
import AboutSidebar from "./sidebar";

export const metadata: Metadata = {
  title: "About | Jitendra Kumar Yadav",
};

export default function About() {
  return (
    <main className="relative mx-auto max-w-3xl px-6 md:px-16 lg:mt-28 lg:max-w-7xl">
      <section className="relative grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-2">
        <div className="order-2 duration-700 animate-in slide-in-from-top-full lg:order-none">
          <h1 className="mb-8 basis-1/2 text-3xl font-black tracking-tight sm:text-5xl lg:leading-tight">
            I&apos;m {siteConfig.author.name}. I live in Bulandshahr , backend
            developer shaping innovative digital solutions.
          </h1>

          <div className="font-sans leading-relaxed text-foreground/60">
            I am a self-taught, goal oriented full developer specializing in
            back-end development and Linux.
            <br />
            <br />I am deeply committed to perpetual learning and
            self-improvement, actively seeking opportunities to acquire new
            insights and refine my development skills, regardless of the
            circumstances, favorable or challenging
            <blockquote className="relative my-8 overflow-hidden rounded-md border bg-secondary/50 p-4 pr-12 tracking-tight lg:py-6 lg:pl-6">
              <Quote
                className="absolute -right-4 -top-6 -z-10 h-24 w-24 -rotate-12 text-secondary duration-1000 animate-in slide-in-from-left-full"
                aria-hidden="true"
              />
              I don&apos;t always write code, but when I do, I make definite sure
              it&apos;s the kind that keeps me up at whole night wondering why it
              won&apos;t work. Coding for me is like humour, i don&apos;t like explaining
              it.
            </blockquote>
          </div>
        </div>

        <AboutSidebar />
      </section>

      {/* Setup */}
      <section className="mt-10 max-w-xl">
        <h2 className="mb-8 text-4xl font-bold tracking-tight">Setup</h2>

        <div className="flex flex-col gap-2 duration-500 animate-in zoom-in-50">
          <Image
            src="/images/setup.webp"
            height={400}
            width={400}
            quality={100}
            alt="Future Setup"
            className="w-full rounded-md object-cover"
          />

          <span className="text-center text-foreground/50">My Playground</span>
        </div>
      </section>

      {/* Usage  */}
      <section className="mt-10 max-w-2xl">
        <div className="mb-8">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">Usage</h2>

          <p className="max-w-xl text-foreground/60">
            I regularly employ various tools, technologies, and gadgets in my
            daily work, including but not limited to:
          </p>
        </div>

        {tools.map(({ heading, items }, i) => (
          <div key={i} className="my-4">
            <h3 className="text-2xl font-semibold">{heading}</h3>

            {items.map(({ name, url, description, icon: Icon }, i) => (
              <li key={i} className="flex items-center gap-x-2 p-2">
                <Icon className="h-5 min-h-fit w-5 min-w-fit" />
                <a
                  href={url}
                  rel="noreferrer noopener"
                  target="_blank"
                  aria-label={name}
                  className="my-auto min-w-fit leading-3 text-blue-500 underline underline-offset-4 duration-500 animate-in zoom-in-50 hover:underline dark:text-blue-400"
                >
                  {name}
                </a>
                -
                <span className="truncate text-foreground/60 duration-500 animate-in zoom-in-50">
                  {description}
                </span>
              </li>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
