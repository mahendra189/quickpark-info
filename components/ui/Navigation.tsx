"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function NavigationMenuDemo() {
    return (
        <NavigationMenu viewport={false} className="bg-white px-8 py-2 rounded-2xl border shadow-md">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                        Quickpark
                    </h1>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>Home</NavigationMenuLink>

                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>Components</NavigationMenuLink>

                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        Docs
                    </NavigationMenuLink>
                </NavigationMenuItem>



                <NavigationMenuItem><div className="flex flex-wrap items-center gap-2 md:flex-row">
                    <Button>Download the app</Button>
                </div></NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
