"use client"

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
  } from '@clerk/nextjs'
import { Clapperboard } from "lucide-react";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
        
        {/* <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>
        {children}
        </Authenticated>
        </ConvexProviderWithClerk> */}
        {/* <AuthLoading>
            <Loading />
        </AuthLoading> */}
        <ClerkLoading>
            <Loading/>
        </ClerkLoading>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            {children}
        </SignedIn>
    </ClerkProvider>
  );
};
