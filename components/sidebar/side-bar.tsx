"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    console.log(sidebar);
  }, [sidebar]);

  return (
    <>
      <Menu
        onClick={showSidebar}
        className="cursor-pointer xl:hidden rounded-2xl"
        size={30}
        strokeWidth={1}
      />

      <div>
        <div
          className={`${
            sidebar ? "left-0" : "-left-96"
          } w-[323px] z-50 h-screen top-0 fixed bg-gray-100 duration-500`}
        >
          <div className="p-4 flex flex-row justify-between items-center">
            <Link href={"/"}>
              <Image src={"/rocket.svg"} alt={""} width={40} height={40} />
            </Link>
            <Link
              href={"/"}
              className="border-slate-700 border rounded-2xl p-1 px-4"
            >
              Chase your dream
            </Link>
          </div>
          <Separator className="my-4" />
          <nav className="p-4">
            <ul className="w-full">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className="nav-text px-4 py-3">
                    <Link href={item.path} onClick={showSidebar}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div
          className={` ${
            sidebar ? "opacity-50" : "opacity-0 hidden"
          } "z-50 fixed left-0 w-screen h-screen top-0 bg-black transition-opacity duration-300"`}
          onClick={showSidebar}
        />
      </div>
    </>
  );
}

export default Sidebar;
