"use client"

import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/clerk-react"

export const Navbar = () => {
    return (
        <div className="flex items-center gap-x-4 p-5 bg-green-500">
            <div className="hidden lg:flex lg:flex-1 bg-yellow-500">
                {/* addSearch */}
                search
            </div>
            <div>
                <UserButton />
            </div>
        </div>
    )
}