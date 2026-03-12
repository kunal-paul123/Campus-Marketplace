"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ShoppingBag, PlusCircle, MessageCircle, User } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedButton } from "./animated-button";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg"
        >
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
                        C
                    </div>
                    <span className="hidden sm:inline-block text-lg font-semibold text-gray-900">
                        CampusMarket
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <Link href="/browse">
                        <Button variant="ghost" className="gap-2 text-gray-600 hover:text-gray-900">
                            <ShoppingBag className="h-4 w-4" />
                            Browse
                        </Button>
                    </Link>
                    <Link href="/chat">
                        <Button variant="ghost" className="gap-2 text-gray-600 hover:text-gray-900">
                            <MessageCircle className="h-4 w-4" />
                            Messages
                        </Button>
                    </Link>
                    <Link href="/sell">
                        <AnimatedButton className="gap-2 ml-2">
                            <PlusCircle className="h-4 w-4" />
                            Sell Item
                        </AnimatedButton>
                    </Link>
                    <Link href="/profile">
                        <Button variant="ghost" size="icon" className="ml-1 text-gray-600 hover:text-gray-900">
                            <User className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t border-gray-100 bg-white"
                >
                    <div className="container py-4 flex flex-col gap-2">
                        <Link href="/browse" onClick={() => setMobileOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <ShoppingBag className="h-4 w-4" /> Browse
                            </Button>
                        </Link>
                        <Link href="/chat" onClick={() => setMobileOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <MessageCircle className="h-4 w-4" /> Messages
                            </Button>
                        </Link>
                        <Link href="/sell" onClick={() => setMobileOpen(false)}>
                            <Button className="w-full justify-start gap-2">
                                <PlusCircle className="h-4 w-4" /> Sell Item
                            </Button>
                        </Link>
                        <Link href="/profile" onClick={() => setMobileOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start gap-2">
                                <User className="h-4 w-4" /> Profile
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
