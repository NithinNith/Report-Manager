
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log(credentials?.username);
                console.log(credentials?.password);

                if (!credentials.username || !credentials.password) {
                    return null;
                }
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.username }
                });
                console.log(user);
                if (!user) return null;

                const passwordMatches = bcrypt.compare(credentials?.password, user.password);
                if (!passwordMatches) return null;
                return user;
            }
        }),
    ],
    callbacks: {
        jwt({ token, account, user }) {
            if (account) {
                token.accessToken = account.access_token
                token.id = user?.id
            }
            return token
        },
        session({ session, token }) {
            session.user.id = token.id;
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }