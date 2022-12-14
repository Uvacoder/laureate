import { MutableRefObject } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";

interface Props {
  setIsPanelOpen: (callback: (c: boolean) => boolean) => void;
  rootRef: MutableRefObject<undefined>;
}

export default function ButtonGroup({ setIsPanelOpen, rootRef }: Props) {
  function toggleDark() {
    if (JSON.parse(localStorage.getItem("isDark") || "false")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("isDark", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("isDark", "true");
    }
  }

  return (
    <div className="h-full w-auto pl-4 lg:w-56">
      <div className="relative flex h-full items-center justify-end gap-x-4">
        <a
          className="z-10"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/subhoghoshX/laureate"
        >
          <svg
            className="h-[22px] w-[22px] fill-[#323232] dark:fill-white"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <button className="relative z-10" onClick={toggleDark}>
          <MoonIcon className="h-6 w-6 dark:stroke-white" />
        </button>
        <button
          className="relative z-10 lg:hidden"
          onClick={() => setIsPanelOpen((c) => !c)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="h-5 w-5 dark:fill-white"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12z" />
            <path d="M13 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
