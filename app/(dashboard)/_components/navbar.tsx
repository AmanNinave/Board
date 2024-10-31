"use client"

import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/clerk-react"
import { SearchInput } from "./search-input"

export const Navbar = () => {
    return (
        <div className="flex items-center gap-x-4 p-5">
            <div className="hidden lg:flex lg:flex-1">
                <SearchInput/>
            </div>
            <div>
                <UserButton />
            </div>
        </div>
    )
}