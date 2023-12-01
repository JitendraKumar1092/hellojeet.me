<div align=center>

# Welcome

### A Minimal portfolio website built using TypeScript, Next.js 14, and pre-configured with ESLint, Prettier, and Husky.

</div>

## Getting Started

**Install dependencies**

```bash
bun i || pnpm i || yarn || npm i
```

**Initialize a new git repository _(Optional)_:**

```bash
git init
git add .
git commit --no-verify -m "init"
```

## Available Scripts

In the project directory, you can run:

| **Script**   | **Description**                                      |
| ------------ | ---------------------------------------------------- |
| `dev`        | Runs the app in the development mode.                |
| `build`      | Builds the app for production to the `.next` folder. |
| `start`      | Runs the built app in the production mode.           |
| `preview`    | Builds and serves the app in the production mode.    |
| `lint`       | Runs next lint on the project.                       |
| `type-check` | Runs TypeScript type checker.                        |
| `fmt:check`  | Checks if the code is formatted with Prettier.       |
| `fmt:write`  | Formats the code with Prettier.                      |
| `prepare`    | Installs husky git hooks.                            |

## Folder Structure

```bash
.
├── public
│   ├── favicon.ico
│   ├── nextjs-dark.svg
│   └── nextjs-light.svg
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── styles
│   │   └── globals.css
│   └── types
│       └── reset.d.ts
├── LICENSE
├── README.md
├── next.config.js
├── next-env.d.ts
├── package.json
├── postcss.config.js
├── renovate.json
├── tailwind.config.js
└── tsconfig.json
```

## After Installation Checklist

- [ ] Update `package.json` with your project details.
- [ ] Update `README.md` with your project details.
- [ ] Update `LICENSE` with your name and year.

## Switching Package Manager

This template uses [bun](https://bun.sh/docs/cli/install) as the default package manager. If you want to use `pnpm`, `npm` or `yarn`, you need to remove the `bun.lockb` file and run `pnpm i`, `npm i` or `yarn` to generate the lock file for the respective package manager.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<!----------------------------------{ Labels }--------------------------------->
