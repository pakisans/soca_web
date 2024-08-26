import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      authorize: async (credentials) => {
        const user = { id: 1, name: "John Doe", email: credentials.email };
        if (
          credentials.email === "user@example.com" &&
          credentials.password === "password"
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
