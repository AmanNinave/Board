"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient, useAction } from "convex/react";
import { Loading } from "@/components/auth/loading";
import {
    SignInButton,
    SignedIn,
    SignedOut,
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
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
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
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
