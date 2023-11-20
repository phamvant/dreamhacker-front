import { BackEndURL } from "@/lib/constant";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "thuan",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credential, req) {
        if (!credential?.email || !credential.password) return null;
        const { email, password } = credential;
        const res = await fetch(BackEndURL + "/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });

        if (res.status === 401) {
          console.log(res.statusText);
          return null;
        }

        const user = await res.json();

        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
