import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectTo } from "@utils/database";
import User from "@Models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      checks: ['none'],
    }),
  ],
  callbacks: {
    async session({ session }) {
      // Your session logic
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      await connectTo();
      
      const user = await User.findOne({ email: profile.email });
      
      try {
        if (!user) {
            const us=  await User.create({
                email: profile.email,
                username: profile.name,
                image: profile.picture,
              });
            }
            return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    
  },
});

export{ handler as GET , handler as POST};
