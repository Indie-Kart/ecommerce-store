import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
// Auth Config
import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  // Auth Config
  ...authConfig,

  providers: [Github],

  callbacks: {
    jwt({ token, user, profile }) {
      if (user && profile) {
        //console.log("jwt", user, profile);
        return { ...token, user, profile };
      }
      //console.log("jwt after sign in", token);
      return token;
    },
    session({ session, token }) {
      //console.log("session", session, token);
      return { ...session, user: { ...session.user, ...token } };
    },
  },
});
