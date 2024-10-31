"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    ClerkLoading
} from "@clerk/nextjs";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider dynamic>
        <ClerkLoading>
            <Loading />
        </ClerkLoading>

        <SignedOut>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h2>Please Sign In to Continue</h2>
                <SignInButton mode="modal" />
            </div>
        </SignedOut>

        <SignedIn>
            {children}
        </SignedIn>
    </ClerkProvider>
  );
};
