import NextAuth from "next-auth";
import { NextAuthConfig } from "next-auth";
import Github from "@auth/core/providers/github";

// Configuration object for NextAuth
export const config = {
  providers: [Github], // Configure GitHub as the authentication provider
  callbacks: {
    // Callback to check authorization based on request and authentication
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "./middleware.ts") return !!auth; // Allow access if authenticated
      return true; // Allow access for other paths
    },
    // Callback to handle JSON Web Token (JWT) creation and updates
    jwt({ token, user, profile }) {
      if (user && profile) {
        console.log("jwt", user, profile); 
        return { ...token, user, profile }; 
      }
      console.log("jwt after sign in", token); 
      return token; 
    },
    // Callback to handle session creation and updates
    session({ session, token }) {
      console.log("session", session, token); // Log session and token data
      return { ...session, user: { ...session.user, ...token } }; 
    },
  },
} satisfies NextAuthConfig; // Ensure the config satisfies the NextAuthConfig type

export const { handlers, auth, signIn, signOut } = NextAuth(config);
