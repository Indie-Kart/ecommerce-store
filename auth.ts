import NextAuth from "next-auth";
import { NextAuthConfig } from "next-auth";
import Github from "@auth/core/providers/github";

export const config = {
  providers: [Github],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
    jwt({ token, user, profile }) {
      if (user && profile) {
        console.log("jwt", user, profile);
        return { ...token, user, profile };
      }
      console.log("jwt after sign in", token);
      return token;
    },
    session({ session, token }) {
      console.log("session", session, token);
      return { ...session, user: { ...session.user, ...token } };
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
