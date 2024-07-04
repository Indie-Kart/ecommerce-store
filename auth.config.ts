import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  // Auth Secret
  secret: process.env.AUTH_SECRET,

  // satisfies NextAuthConfig, info supplied in auth.ts
  // Login Providers
  providers: [],

  callbacks: {
    /**
     * Checks if the user is authorized to access the requested page.
     * Used by MiddleWare
     */
    async authorized({ auth, request }) {
      return true;
    },
  },
} satisfies NextAuthConfig;
export default authConfig;
