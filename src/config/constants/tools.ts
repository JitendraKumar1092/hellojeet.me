import { Hexagon, Laptop } from "lucide-react";
import { FaJava, FaPython } from "react-icons/fa";

import { Tool } from "@/types/tool";
import { Icons } from "@/components/icons";

const {
  Chrome,
  Dart,
  Firefox,
  Flutter,
  Github,
  JavaScript,
  NextJs,
  React,
  Rust,
  Svelte,
  TypeScript,
  VSCode,
} = Icons;

export const tools: Tool[] = [
  {
    heading: "Technologies",
    items: [
      {
        name: "React",
        description: "A JavaScript library for building user interfaces",
        url: "https://react.dev/",
        icon: React,
      },
      {
        name: "Next.js",
        description: "The React Framework for Production",
        url: "https://nextjs.org/",
        icon: NextJs,
      },
      {
        name: "Node.Js",
        description: "Server-side JavaScript runtime environment.",
        url: "https://nodejs.org/en/",
        icon: Hexagon,
      },

      {
        name: "Express",
        description: "Web application framework for Node.js.",
        url: "https://expressjs.com/",
        icon: Flutter,
      },
    ],
  },

  {
    heading: "Languages",
    items: [
      {
        name: "JavaScript",
        description: "The language of the web",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: JavaScript,
      },
      {
        name: "TypeScript",
        description: "Superset of JavaScript with static type-checking",
        url: "https://www.typescriptlang.org/",
        icon: TypeScript,
      },
      {
        name: "Java",
        description:
          "A multi-paradigm, a versatile, object-oriented programming language known for its platform independence ",
        url: "https://www.rust-lang.org/",
        icon: FaJava,
      },
      {
        name: "Python",
        description:
          "Ccelebrated for its simplicity, readability, and broad applicability in areas such as web development, data science, and automation.",
        url: "https://dart.dev/",
        icon: Dart,
      },
    ],
  },

  {
    heading: "Tools",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "Code editing. Redefined. Free. Open source. Runs everywhere.",
        url: "https://code.visualstudio.com/",
        icon: VSCode,
      },
      {
        name: "GitHub",
        description: "Where the world builds software",
        url: "https://github.com/",
        icon: Github,
      },
      {
        name: "Google Chrome",
        description: "A fast, secure, and free web browser",
        url: "https://www.google.com/chrome/",
        icon: Chrome,
      },
      {
        name: "Firefox",
        description: "A fast, private and secure browser",
        url: "https://www.mozilla.org/en-US/firefox/new/",
        icon: Firefox,
      },
    ],
  },

  {
    heading: "Hardware",
    items: [
      {
        name: "Lenovo Ideapad 145",
        description: "My Loyalest companion",
        url: "https://www.lenovo.com/in/en/p/laptops/ideapad/ideapad-s-series/lenovo-ideapad-s145-15iwl/88ips101200",
        icon: Laptop,
      },
    ],
  },
];
