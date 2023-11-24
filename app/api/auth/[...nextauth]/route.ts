import { BackEndURL } from "@/lib/constant";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
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
          // console.log(res.statusText);
          return null;
        }

        const receivedUserObject = await res.json();

        return receivedUserObject;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      if (new Date().getTime() > token.backendTokens.expiresIn) {
        return await refreshToken(token);
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;
      return session;
    },
  },
};

const refreshToken = async (token: JWT): Promise<JWT> => {
  const res = await fetch(BackEndURL + "/auth/refresh", {
    method: "POST",
    headers: {
      authorization: `Refresh ${token.backendTokens.refreshTokenKey}`,
      "Content-type": "application/json",
    },
  });

  if (res.status === 201) {
    // console.log("refreshed");
    const { backendTokens } = await res.json();

    return {
      ...token,
      backendTokens: backendTokens,
    };
  }

  return { ...token };
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
