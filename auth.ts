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
      if (user) token.user = user;
      if (profile) token.profile = profile;
      return token;
    },
    session({ session, token, user }) {
      if (session.user) session.profile = token.profile;
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
