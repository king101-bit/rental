"use client";
import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { House, TrendingDown, Key, Building } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const categories = [
  { name: "New Listings", href: "/listings?area=Asokoro", icon: House },
  { name: "Price Reduced", href: "/listings?area=Maitama", icon: TrendingDown },
  { name: "For Rent", href: "/listings?area=Wuse", icon: Key },
  { name: "For Sale", href: "/listings?area=Garki", icon: Building },
];

const helpCards = [
  {
    title: "Find the right home",
    description:
      "Browse verified listings across Abuja neighborhoods. Filter by budget, bedrooms, and amenities.",
    cta: "Browse listings",
    href: "/listings",
  },
  {
    title: "Connect with agents",
    description:
      "Work with verified local agents who know the Abuja market and can guide you through the process.",
    cta: "Find an agent",
    href: "/agents",
  },
  {
    title: "List your property",
    description:
      "Reach thousands of potential tenants and buyers. Get your property verified for more visibility.",
    cta: "List property",
    href: "/upload",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"rent" | "buy">("rent");
  const [helpTab, setHelpTab] = useState<"renting" | "buying" | "selling">(
    "renting",
  );

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
              <div className="container m-6 space-y-6">
                {/* Section title */}
                <h1 className="font-semibold text-lg">Browse homes in Abuja</h1>

                {/* Area cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex flex-col items-start p-8 border border-border rounded-lg bg-card hover:shadow-lg hover:scale-105 transition-transform font-medium text-foreground text-sm"
                      >
                        {/* Icon on top */}
                        <Icon className="h-6 w-6 text-foreground/70 mb-2" />

                        {/* Text below */}
                        <span>{category.name}</span>
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
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-5xl mx-auto">
              <div className="container space-y-6">
                <h1 className="text-lg text-foreground mb-4 font-semibold">
                  Discover how we can help
                </h1>
                <div className="flex gap-2 mb-6">
                  {(["renting", "buying", "selling"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setHelpTab(tab)}
                      className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                        helpTab === tab
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-border hover:border-foreground"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {helpCards.map((card) => (
                    <div
                      key={card.title}
                      className="p-5 bg-card border border-border rounded-lg flex flex-col"
                    >
                      <h3 className="font-semibold text-foreground mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {card.description}
                      </p>
                      <Link
                        href={card.href}
                        className="text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
                      >
                        {card.cta}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="px-4 py-12">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                {/*Text section*/}
                <h1 className="text-lg font-semibold text-foreground mb-2">
                  Get Local Info
                </h1>
                <p className="text-muted-foreground text-sm mb-4">
                  Explore neighborhoods across Abuja. Get important local
                  information on the areas you are most interested in.
                </p>
                <div className="flex items-center bg-background border border-border rounded-full overflow-hidden max-w-sm">
                  <Input
                    type="text"
                    placeholder="Enter area, e.g. Wuse, Maitama"
                    className="flex-1 border-0 focus-visible:ring-0 text-sm px-4 py-2"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full m-1 h-8 w-8 shrink-0"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {/* Card section */}
              <div className="flex flex-col justify-center p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Are you a landlord?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  List your property and reach thousands of verified tenants
                  looking for homes in Abuja.
                </p>
                <Button asChild className="w-fit">
                  <Link href="/upload">List Your Property</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
