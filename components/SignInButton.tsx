"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import SignUpForm from "./SignUpForm";
import ProfileButton from "./ProfileButton";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    const props = {
      userid: session.user.id,
      username: session.user.username,
    };
    return <ProfileButton props={props} />;
  }

  return (
    <div className="flex flex-row justify-between">
      <Button size={"sm"} className="h-8 mr-4">
        <Link className="text-md" href={"/api/auth/signin"}>
          Sign In
        </Link>
      </Button>

      <Dialog>
        <DialogTrigger asChild>
          <Button size={"sm"} className="h-8" variant={"secondary"}>
            Sign Up
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign Up Now</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <SignUpForm />
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignInButton;
