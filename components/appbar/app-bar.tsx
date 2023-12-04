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
            <Image src={"/rocket.svg"} alt={""} width={40} height={40} />
          </Link>
          <Link
            href={"/"}
            className="border-slate-700 border rounded-2xl p-2 px-4 hidden lg:block"
          >
            Chase your dream
          </Link>
        </div>
        {session ? (
          <div className="hidden xl:block">
            <MainNav className="mx-6" />
          </div>
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
