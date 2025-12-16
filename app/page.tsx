"use client";
import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { House, TrendingDown, Key, Building } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"rent" | "buy">("rent");

  const areas = [
    { name: "Asokoro", href: "/listings?area=Asokoro", icon: House },
    { name: "Maitama", href: "/listings?area=Maitama", icon: TrendingDown },
    { name: "Wuse", href: "/listings?area=Wuse", icon: Key },
    { name: "Garki", href: "/listings?area=Garki", icon: Building },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />

        <main className="flex-1">
          <section className="relative min-h-[60vh] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://i.pinimg.com/736x/3f/da/3b/3fda3b2ef33aad8b4bff418027d0aadf.jpg')`,
              }}
            />
            <div className="relative z-10 text-center px-4 w-full max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-balance leading-tight">
                Find Your Perfect Home in Abuja
              </h1>
              <div className="flex items-center justify-center gap-6 mt-8">
                <button
                  onClick={() => setActiveTab("rent")}
                  className={`text-white text-sm md:text-base pb-2 border-b-2 transition-colors ${
                    activeTab === "rent"
                      ? "border-white font-semibold"
                      : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                >
                  Rent
                </button>
                <button
                  onClick={() => setActiveTab("buy")}
                  className={`text-white text-sm md:text-base pb-2 border-b-2 transition-colors ${
                    activeTab === "buy"
                      ? "border-white font-semibold"
                      : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                >
                  Buy
                </button>
                <Link
                  href="/agents"
                  className="text-white text-sm md:text-base pb-2 border-b-2 border-transparent opacity-80 hover:opacity-100 transition-colors"
                >
                  Find Agent
                </Link>
                <Link
                  href="/upload"
                  className="text-white text-sm md:text-base pb-2 border-b-2 border-transparent opacity-80 hover:opacity-100 transition-colors"
                >
                  List Property
                </Link>
              </div>
              <div className="mt-6 flex items-center bg-white rounded-full overflow-hidden shadow-lg">
                <Input
                  type="text"
                  placeholder="Area, neighborhood, or address..."
                  className="flex-1 border-0 focus-visible:ring-0 text-sm md:text-base px-6 py-6 rounded-full"
                />
                <Button
                  size="icon"
                  className="rounded-full m-2 h-10 w-10 shrink-0"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>

          <section className="px-4 pb-8">
            <div className="max-w-5xl mx-auto">
              <div className="container mb-6 space-y-6">
                {/* Section title */}
                <h1 className="font-semibold text-lg">Browse homes in Abuja</h1>

                {/* Area cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {areas.map((area) => {
                    const Icon = area.icon;
                    return (
                      <Link
                        key={area.name}
                        href={area.href}
                        className="flex flex-col items-start p-8 border border-border rounded-lg bg-card hover:shadow-lg hover:scale-105 transition-transform font-medium text-foreground text-sm"
                      >
                        {/* Icon on top */}
                        <Icon className="h-6 w-6 text-foreground/70 mb-2" />

                        {/* Text below */}
                        <span>{area.name}</span>
                      </Link>
                    );
                  })}
                </div>

                {/* Looking to list card */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border border-border rounded-lg bg-card">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        Looking to list your property?
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Find verified agents in your area
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/agents">Find Agents</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
