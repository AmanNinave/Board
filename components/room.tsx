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
}

export const Room = ({
    children,
    roomId
}: RoomProps ) => {
    return (
        <LiveblocksProvider publicApiKey={"pk_dev_H1WBoArC-EEFKkN0Ns7L2xt4tgMxcaVgx6ae94l7GmSqCZ-vDKRE1iYvMigNctIY"}>
            <RoomProvider id={roomId}>
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    )
}
