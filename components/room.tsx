"use client"

import { ReactNode } from "react"

import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";

interface RoomProps  {
    children : ReactNode;
    roomId : string;
    fallback : NonNullable<ReactNode> | null;
}

export const Room = ({
    children,
    roomId,
    fallback
}: RoomProps ) => {
    return (
        <LiveblocksProvider publicApiKey={"pk_dev_H1WBoArC-EEFKkN0Ns7L2xt4tgMxcaVgx6ae94l7GmSqCZ-vDKRE1iYvMigNctIY"}>
            <RoomProvider id={roomId}>
                <ClientSideSuspense fallback={fallback}>
                {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}
