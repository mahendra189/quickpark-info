"use client";
import Features from "@/components/features";
import { Badge } from "@/components/ui/badge";
import { NavigationMenuDemo } from "@/components/ui/Navigation";
import { BadgeCheck } from "lucide-react";

export default function Home() {

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 margin-0 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <NavigationMenuDemo />
        <Features />
      </div>
      <div
        className="border h-[5rem] px-4 py-3 flex items-center justify-around w-scree  relative left-1/2 right-1/2 -translate-x-1/2 -mt-20 mb-40"
      >
        <div className="w-1/6 border-r h-full " />
        <div className="w-1/6 relative ">
          <span className="absolute -top-7 left z-10 flex items-center justify-center -translate-1/2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="10" y1="4" x2="10" y2="16" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="10" x2="16" y2="10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="absolute -bottom-12 left z-10 flex items-center justify-center -translate-1/2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="10" y1="4" x2="10" y2="16" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="10" x2="16" y2="10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-gray-500 text-sm flex items-center justify-center h-full">
            Total Features
          </span>
        </div>
        <div className="overflow-x-hidden w-3/6 max-w-full relative">
          {/* Plus icon at the top left */}
          <ul className="flex gap-8 animate-scroll-horizontal min-w-full" aria-hidden="true">
            <li className="text-gray-700 text-sm">Real-time parking availability</li>
            <li className="text-gray-700 text-sm">Seamless booking process</li>
            <li className="text-gray-700 text-sm">Secure payment integration</li>
            <li className="text-gray-700 text-sm">User-friendly dashboard</li>
            <li className="text-gray-700 text-sm">Location-based search</li>
            {/* Duplicate for seamless infinite scroll */}
            <li className="text-gray-700 text-sm">Real-time parking availability</li>
            <li className="text-gray-700 text-sm">Seamless booking process</li>
            <li className="text-gray-700 text-sm">Secure payment integration</li>
            <li className="text-gray-700 text-sm">User-friendly dashboard</li>
            <li className="text-gray-700 text-sm">Location-based search</li>
          </ul>

          <style jsx>{`
            @keyframes scroll-horizontal {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
            }
            .animate-scroll-horizontal {
        animation: scroll-horizontal 20s linear infinite;
        width: 200%;
            }
          `}</style>
        </div>
        <div className="w-1/6 h-full border-l relative" >
          <span className="absolute -top-3 right z-10 flex items-center justify-center -translate-1/2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="10" y1="4" x2="10" y2="16" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="10" x2="16" y2="10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="absolute -bottom-8 right z-10 flex items-center justify-center -translate-1/2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="10" y1="4" x2="10" y2="16" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="10" x2="16" y2="10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span></div>
      </div>

      <div className="w-full h-[100vh] flex flex-col items-center justify-center">
        <Badge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600 flex items-center gap-2"
        >
          <BadgeCheck className="w-4 h-4" />
          Featured
        </Badge>
        <h1 className="text-4xl font-bold mt-4 text-center">
          Explore Our Powerful Features
        </h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {[
            {
              title: "Real-time parking availability",
              description: "Instantly view available parking spots in your area.",
              icon: <BadgeCheck className="w-6 h-6 text-blue-500" />,
            },
            {
              title: "Seamless booking process",
              description: "Reserve your spot in just a few clicks.",
              icon: <BadgeCheck className="w-6 h-6 text-blue-500" />,
            },
            {
              title: "Secure payment integration",
              description: "Pay safely with trusted payment gateways.",
              icon: <BadgeCheck className="w-6 h-6 text-blue-500" />,
            },
            {
              title: "User-friendly dashboard",
              description: "Manage your bookings and preferences easily.",
              icon: <BadgeCheck className="w-6 h-6 text-blue-500" />,
            },
            {
              title: "Location-based search",
              description: "Find parking spots near your destination.",
              icon: <BadgeCheck className="w-6 h-6 text-blue-500" />,
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-start border border-gray-100 dark:border-gray-800"
            >
              <div className="mb-3">{feature.icon}</div>
              <h2 className="text-lg font-semibold mb-1">{feature.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>


        <div className="mt-16 w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Collaborators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Mahendrakumar Suthar",
                role: "Developer",
                avatar: "https://ui-avatars.com/api/?name=Mahendrakumar+Suthar&background=0D8ABC&color=fff",
              },
              {
                name: "Aditya Agarwal",
                role: "Developer",
                avatar: "https://ui-avatars.com/api/?name=Aditya+Agarwal&background=0D8ABC&color=fff",
              },
              {
                name: "Ruhaan Sande",
                role: "Developer",
                avatar: "https://ui-avatars.com/api/?name=Ruhaan+Sande&background=0D8ABC&color=fff",
              },
            ].map((collaborator, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700"
              >
                <img
                  src={collaborator.avatar}
                  alt={collaborator.name}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <div className="font-semibold">{collaborator.name}</div>
                  <div className="text-gray-500 text-sm">{collaborator.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 relative w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Release Timeline</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {[
              {
              title: "v1.3.0 - User Authentication & Database",
              date: "2024-06-10",
              content: "Added login with Firebase, user management, PostgreSQL integration, and a booking history table.",
              },
              {
              title: "v1.2.0 - Enhanced Dashboard",
              date: "2024-06-</svg>01",
              content: "Introduced a new user dashboard, improved booking flow, and added analytics for parking usage.",
              },

              {
              title: "v1.0.0 - Initial Release",
              date: "2024-05-01",
              content: "Launched core features: real-time parking availability, booking, and location-based search.",
              },
            ].map((item, idx) => (
              <li key={idx} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <BadgeCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
                <span className="ml-2 text-xs font-normal text-gray-400">{item.date}</span>
              </h3>
              <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {item.content}
              </div>
              </li>
            ))}
          </ol>
        </div>

      </div>

    </>);
}
