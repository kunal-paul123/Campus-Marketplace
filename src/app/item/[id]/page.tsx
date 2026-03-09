"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Heart,
    MessageCircle,
    MapPin,
    Calendar,
    Tag,
    ShieldCheck,
} from "lucide-react";
import { ItemGallery } from "@/components/item-gallery";
import { AnimatedButton } from "@/components/animated-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { items } from "@/lib/data";

export default function ItemDetailsPage() {
    const { id } = useParams();
    const item = items.find((i) => i.id === id);
    const [interested, setInterested] = useState(false);

    if (!item) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Item not found</h1>
                <p className="text-gray-500 mb-6">This listing may have been removed.</p>
                <Link href="/browse">
                    <Button>Back to Browse</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-8">
            {/* Back */}
            <Link href="/browse">
                <Button variant="ghost" className="gap-2 mb-6 text-gray-600">
                    <ArrowLeft className="h-4 w-4" /> Back to Browse
                </Button>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left: Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <ItemGallery images={item.images} title={item.title} />
                </motion.div>

                {/* Right: Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-6"
                >
                    {/* Category & Condition */}
                    <div className="flex items-center gap-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        <Badge variant="outline">{item.condition}</Badge>
                        {item.isSold && (
                            <Badge className="bg-red-100 text-red-700 border-red-200">
                                Sold
                            </Badge>
                        )}
                    </div>

                    {/* Title & Price */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            {item.title}
                        </h1>
                        <p className="text-3xl font-bold text-primary mt-2">
                            ₹{item.price.toLocaleString("en-IN")}
                        </p>
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                            Description
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                        </p>
                    </div>

                    {/* Details */}
                    <div className="glass-card p-4 space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            {item.campus}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Tag className="h-4 w-4 text-gray-400" />
                            {item.category}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            Listed on{" "}
                            {new Date(item.createdAt).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </div>
                    </div>

                    {/* Seller Card */}
                    <div className="glass-card p-4">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-11 w-11">
                                <AvatarImage src={item.seller.avatar} alt={item.seller.name} />
                                <AvatarFallback>{item.seller.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-semibold text-gray-900">
                                        {item.seller.name}
                                    </p>
                                    <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                                </div>
                                <p className="text-xs text-gray-500">{item.seller.campus}</p>
                            </div>
                            <Link href="/profile">
                                <Button variant="ghost" size="sm">
                                    View Profile
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <Link href="/chat" className="flex-1">
                            <AnimatedButton className="w-full gap-2">
                                <MessageCircle className="h-4 w-4" />
                                Chat with Seller
                            </AnimatedButton>
                        </Link>
                        <Button
                            variant={interested ? "default" : "outline"}
                            size="icon"
                            className="shrink-0"
                            onClick={() => setInterested(!interested)}
                        >
                            <Heart
                                className={`h-4 w-4 ${interested ? "fill-current" : ""}`}
                            />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
