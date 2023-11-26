"use client";

import * as React from "react";

import useViewport from "@/lib/viewPort";
import AuthButton from "./AuthButton";
import MainNav from "./dashboard/main-nav";
import Search from "./dashboard/search";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function AppBar() {
  const { data: session } = useSession();

  const viewPort = useViewport();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 flex-row justify-between">
        <div className="flex flex-row items-center">
          <Link href={"/"}>
            <Image
              src={"/rocket.svg"}
              alt={""}
              width={40}
              height={40}
              className="mr-4"
            />
          </Link>
          <Link
            href={"/"}
            className="border-slate-700 border rounded-2xl p-1 px-4"
          >
            Chase your dream
          </Link>
        </div>
        {session ? (
          <>
            <MainNav className="mx-6" />
          </>
        ) : (
          <div>
            {/* <Link href={"/"}>
              <Image
                src={"/rocket.svg"}
                alt={""}
                width={40}
                height={40}
                className="lg:mr-52"
              />
            </Link>
            <Link href={"/"} className="hidden lg:inline-block" target="_blank">
              Chase your dream
            </Link> */}
          </div>
        )}
        <div className="ml flex items-center space-x-4">
          <Search className={"hidden md:block lg:block"} />
          <AuthButton />
        </div>
      </div>
    </div>
  );
}
