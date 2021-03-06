import { AnimatePresence, motion, useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import Menu from "../../common/Menu";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="lightgrey"
    strokeLinecap="round"
    {...props}
  />
);

function Head() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const router = useRouter();

  function logout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isOpen && <Menu isOpen={isOpen} toggleOpen={() => toggleOpen()} />}
      </AnimatePresence>
      <div className="px-5 py-2 flex backdrop-blur-3xl items-center sticky top-0 z-30">
        {/* left */}
        <div className="flex items-center grow gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#030303" />
            <path
              opacity="0.7"
              d="M19.1728 23.6L10.2734 16L19.1728 8.40002L19.7266 9.04756L11.5855 16L19.7266 22.9525"
              fill="white"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#030303" />
            <path
              opacity="0.7"
              d="M12.8272 23.6L12.2734 22.9525L20.4145 16L12.2734 9.04756L12.8272 8.40002L21.7266 16"
              fill="white"
            />
          </svg>
        </div>
        {/* hamburger menu */}
        <button className="sm:hidden mt-1.5" onClick={() => toggleOpen()}>
          <svg className="h-6" viewBox="0 0 23 23">
            <Path
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
        </button>
        {/* avatar div */}
        <div className="relative group flex flex-col">
          <div className="bg-white/10 items-center gap-2 rounded-full py-1 px-1.5 sm:flex hidden">
            <Link passHref href="/login">
              <Image
                height={33}
                width={33}
                className="rounded-full"
                layout="fixed"
                src="/avatar.jfif"
                alt="avatar"
              />
            </Link>
            <p className="cursor-default opacity-60 mr-2">Andrew</p>
          </div>

          {/* dropdown */}
          <div className="pt-3 absolute right-0 top-[2.4rem] ">
            <ul className="w-32 group-hover:block hidden bg-white/10 p-2 rounded-full text-center ">
              <li className="cursor-pointer" onClick={logout}>
                Log out
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
