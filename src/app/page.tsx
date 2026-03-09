"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ShieldCheck,
    MapPin,
    MessageCircle,
} from "lucide-react";
import { AnimatedButton } from "@/components/animated-button";
import { ItemCard } from "@/components/item-card";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { items } from "@/lib/data";

const features = [
    {
        icon: ShieldCheck,
        title: "Verified Students",
        description:
            "Only verified college students can buy and sell, ensuring a safe and trusted community.",
    },
    {
        icon: MapPin,
        title: "Campus-Only",
        description:
            "Items are listed within your campus. Meet nearby, skip the shipping, and save money.",
    },
    {
        icon: MessageCircle,
        title: "Easy Chat",
        description:
            "Chat directly with sellers in real-time. Negotiate, ask questions, and close deals fast.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function LandingPage() {
    const featuredItems = items.filter((i) => !i.isSold).slice(0, 4);

    return (
        <>
            {/* ── Hero ── */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-gray-50/50" />
                <div className="container relative py-20 md:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                            <ShieldCheck className="h-4 w-4" />
                            Trusted by 5,000+ students
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                            Buy &amp; Sell Inside{" "}
                            <span className="text-primary">Your Campus</span>
                        </h1>
                        <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
                            The marketplace built exclusively for college students. Find great
                            deals on books, electronics, bikes, and more — all within your campus.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link href="/browse">
                                <AnimatedButton size="lg" className="gap-2 px-6">
                                    Browse Items
                                    <ArrowRight className="h-4 w-4" />
                                </AnimatedButton>
                            </Link>
                            <Link href="/sell">
                                <Button variant="outline" size="lg" className="gap-2 px-6">
                                    Sell Something
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Features ── */}
            <section className="container py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Why CampusMarket?
                    </h2>
                    <p className="mt-3 text-gray-500 max-w-md mx-auto">
                        A safer, simpler way to trade within your college community.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            variants={itemVariants}
                            className="glass-card p-6 text-center"
                        >
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <f.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 mb-2">
                                {f.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {f.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── Featured Items ── */}
            <section className="container pb-16 md:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-between mb-8"
                >
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Recently Listed
                        </h2>
                        <p className="mt-1 text-gray-500 text-sm">
                            Fresh items from students across campuses
                        </p>
                    </div>
                    <Link href="/browse">
                        <Button variant="ghost" className="gap-1 text-primary">
                            View all <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {featuredItems.map((item, i) => (
                        <ItemCard key={item.id} item={item} index={i} />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
