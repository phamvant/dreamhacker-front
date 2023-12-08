import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../sidebar/side-bar";
import AuthButton from "./auth-button/auth-button";
import MainNav from "./main-nav";
import Search from "./search";

export async function AppBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="z-50 border-b fixed w-screen backdrop-filter backdrop-blur-2xl bg-white/50">
      <div className="flex h-16 items-center px-4 flex-row justify-between">
        <div className="flex flex-row items-center gap-2 lg:gap-4">
          <Sidebar />
          <Link href={"/"}>
            <Image
              src={"/rocket.svg"}
              alt={""}
              width={40}
              height={40}
              className="hidden lg:block"
            />
          </Link>
          <Link href={"/"} className="text-2xl font-black text-blue-500 ">
            ChaseYourDream
          </Link>
        </div>
        <div className="hidden xl:block">
          <MainNav isLogged={session ? true : false} className="mx-6" />
        </div>
        <div className="ml flex items-center space-x-4">
          <Search
            className={"hidden md:block lg:block sm:w-[100px] md:w-[200px]"}
          />
          <AuthButton session={session} />
        </div>
      </div>
    </div>
  );
}
