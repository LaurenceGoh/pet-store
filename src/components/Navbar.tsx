"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import Link from "next/link";
const Navbar = () => {
  return (
    <main className="flex flex-col items-center p-12">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pets</NavigationMenuTrigger>
            <NavigationMenuContent>
            <Button variant='ghost' className="grid gap-6 p-6 md:w-[200px] lg:w-[300px] lg:grid-cols-[1fr_0.25fr] h-full" asChild >
                <Link href='/pets/dogs'>
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold leading-none text-left">Dogs</p>
                        <p className="text-sm text-muted-foreground">Dog Content</p>
                      </div>
                    </div>
                  </div>
                </Link>
                  
              </Button>

              <Button variant='ghost' className="grid gap-6 p-6 md:w-[200px] lg:w-[300px] lg:grid-cols-[1fr_0.25fr] h-full" asChild>
              <Link href='/pets/cats'>

                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold leading-none text-left">Cats</p>
                        <p className="text-sm text-muted-foreground">Cat Content</p>
                      </div>
                    </div>
                  </div>
               </Link>
              </Button>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link href="/">
                <div className="grid gap-3 p-6 md:w-[200px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
                  <div className="flex items-center justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Brush
                  </div>
                </div>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </main>
  );
};

export default Navbar;
