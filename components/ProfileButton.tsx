"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface props {
  userid: number;
  username: string;
}

const ProfileButton: React.FC<{ props: props }> = ({ props }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>{props.username}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link className="text-md" href={`/dashboard/user/${props.userid}`}>
              My Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href={""}
              onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
              className="cursor-pointer"
            >
              {" "}
              Sign Out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileButton;
