"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useMutation } from "convex/react";
import { useOrganization } from "@clerk/nextjs";
import {api} from "@/convex/_generated/api"

export const EmptyBoards =  () => {

    const {organization}  = useOrganization();
    const create = useMutation(api.board.create);

    const onClick = () => {
        if(!organization) return;
        
        create({
            orgId: organization.id,
            title: "untitled"
        })
    }
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
                src={"/elements.svg"}
                height={110 }
                width={110}
                alt={"Empty board"}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create your first board!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Start by creating a board for your organization
            </p>
            <div  className="mt-6 ">
                <Button 
                    size="lg"
                    onClick={onClick}
                >
                    Create board
                </Button>
            </div>
        </div>
    )
}