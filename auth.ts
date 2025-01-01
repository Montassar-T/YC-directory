import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { client } from "./sanity/lib/client"
import { writeClient } from "./sanity/lib/write.client"
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    // This callback is called whenever a user signs in.
    async signIn({
      user: { name, email, image },
      profile: {  login, id,bio },
    }) {
      // Check if the user already exists in the database.
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id
        })
      // If the user does not exist, create a new user in the database.
      if (!existingUser) {
        await writeClient.create({
          _type: 'author',
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        })
      }
      return true
    },
    // This callback is called whenever a JWT token is created or updated.
    async jwt({ token, account, profile }) {
      if (account && profile) {
        // Fetch the user from the database using the GitHub profile ID.
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
            id: profile?.id,
          });

        // Add the user ID to the token.
        token.id = user?._id;
      }

      return token;
    },
    // This callback is called whenever a session is checked.
    async session({ session, token }) {
      // Add the user ID to the session.
      Object.assign(session, { id: token.id });
      return session;
    },
  }
})