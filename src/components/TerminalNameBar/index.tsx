export function TerminalNameBar() {
  return (
    <div className="flex">
      <div className="flex">
        <span className="text-white-900 font-jetbrains-mono text-[28px] px-2.5 py-[5px] bg-neutral-850 w-fit h-fit relative">
          rafaelg3r@dev
        </span>
        <svg
          width="23"
          height="38"
          viewBox="0 0 23 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="z-1"
        >
          <path d="M0 0L23 19L0 38V0Z" fill="#222223" />
        </svg>
      </div>
      <div className="flex ">
        <span className=" text-white-900 font-jetbrains-mono text-[28px] pr-2.5 pl-[33px] -ml-[23px] py-1 bg-blue-950 w-fit relative">
          ~
        </span>
        <svg
          width="23"
          height="38"
          viewBox="0 0 23 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L23 19L0 38V0Z" fill="#12488b" />
        </svg>
      </div>
    </div>
  );
}
