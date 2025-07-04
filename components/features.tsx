"use client"
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";
import homepageImg from "../public/homepage.png";
const Features = () => {
    return (
        <div className="bg-white shadow-md overflow-hidden w-full h-full flex items-center justify-center rounded-2xl  border">
            <div className="flex-1 flex flex-row h-full" >


                <div className="flex-1/2 w-1/2 h-full flex-col flex items-center justify-center gap-2">
                    <Badge
                        variant="secondary"
                        className="bg-blue-500 text-white dark:bg-blue-600"
                    >
                        <BadgeCheckIcon />
                        Featured
                    </Badge>
                    {/* Radial gradient for the container to give a faded look */}
                    {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}
                    <p className="relative z-20  bg-clip-text text-4xl font-bold text-typography-100 sm:text-7xl">
                        QuickPark
                    </p>
                    <p className="relative z-10 text-lg text-neutral-500 dark:text-neutral-400">
                        Effortless parking, anytime, anywhere.
                    </p>
                    <Button className="border-t-1 border-t-gray-600">
                        Get Started
                    </Button>
                    <Button
                        variant={'outline'}
                        // className="border-t-1 border-t-gray-600 border"
                        asChild
                    >
                        <a
                            href="https://github.com/mahendra189/quickpark"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </a>
                    </Button>
                </div>
                <div className="flex-1/2 w-1/2 h-full flex items-center justify-center relative">
                    <Image
                        className="absolute translate-y-full bottom-0 animate-[moveUp_1.2s_ease-in-out_forwards] shadow-2xl"
                        src={homepageImg}
                        alt="Homepage"
                        width={300}
                        height={300}
                    />
                    <style jsx global>{`
                        @keyframes moveUp {
                            from {
                                bottom: 0;
                            }
                            to {
                                bottom: 25em;
                            }
                        }
                    `}</style>
                </div>

            </div>

        </div>

    )
}
export default Features;