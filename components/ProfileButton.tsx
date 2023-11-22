import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

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
          <DropdownMenuItem>
            <Link className="text-md" href={"/api/auth/signout"}>
              Sign Out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileButton;
