import * as React from "react";

import useViewport from "@/lib/viewPort";
import AuthButton from "./auth-button/auth-button";
import MainNav from "./main-nav";
import Search from "./search";
import Image from "next/image";
import Link from "next/link";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function AppBar() {
  const session = await getServerSession(authOptions);

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
            className="border-slate-700 border rounded-2xl p-1 px-4 hidden lg:block"
          >
            Chase your dream
          </Link>
        </div>
        {session ? (
          <>
            <MainNav className="mx-6" />
          </>
        ) : (
          <div></div>
        )}
        <div className="ml flex items-center space-x-4">
          <Search className={"hidden md:block lg:block"} />
          <AuthButton session={session} />
        </div>
      </div>
    </div>
  );
}
