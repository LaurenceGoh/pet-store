"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { PawPrint, Shirt, Dog, Cat, Bone, Home } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated } = useKindeBrowserClient();
  return (
    <main className="flex flex-col items-center p-12">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" className={navigationMenuTriggerStyle()}>
              <Home className="mr-2 " />
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <PawPrint className="mr-2 " />
              <p>Pets</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Button
                variant="ghost"
                className="grid gap-6 p-6 md:w-[200px] lg:w-[300px] lg:grid-cols-[1fr_0.25fr] h-full"
                asChild
              >
                <Link href="/pets/dogs">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Dog />
                      <div>
                        <p className="text-sm font-semibold leading-none text-left">
                          Dogs
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Dog Content
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Button>

              <Button
                variant="ghost"
                className="grid gap-6 p-6 md:w-[200px] lg:w-[300px] lg:grid-cols-[1fr_0.25fr] h-full"
                asChild
              >
                <Link href="/pets/cats">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Cat />
                      <div>
                        <p className="text-sm font-semibold leading-none text-left">
                          Cats
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Cat Content
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Button>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Shirt className="mr-2"/>
              <p>Pet Utilities</p>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Button
                variant="ghost"
                className="grid gap-6 p-6 md:w-[200px] lg:w-[300px] lg:grid-cols-[1fr_0.25fr] h-full"
                asChild
              >
                <Link href="/accessories/food">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Bone />
                      <div>
                        <p className="text-sm font-semibold leading-none text-left">
                          Pet Food
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Pet Food Content
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="grid gap-6 p-6 md:w-[200px] lg:w-[300px] lg:grid-cols-[1fr_0.25fr] h-full"
                asChild
              >
                <Link href="/accessories/home">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      <Home />
                      <div>
                        <p className="text-sm font-semibold leading-none text-left">
                          Home
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Home Content
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Button>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {!isAuthenticated ? (
            <>
              <NavigationMenuItem>
                <LoginLink
                  className={navigationMenuTriggerStyle()}
                  postLoginRedirectURL="/welcome"
                >
                  Login
                </LoginLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <RegisterLink
                  className={navigationMenuTriggerStyle()}
                  postLoginRedirectURL="/welcome"
                >
                  Sign Up
                </RegisterLink>
              </NavigationMenuItem>
            </>
          ) : (
            <NavigationMenuItem>
              <LogoutLink className={navigationMenuTriggerStyle()}>
                Logout
              </LogoutLink>
            </NavigationMenuItem>
          )}

          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </main>
  );
};

export default Navbar;
