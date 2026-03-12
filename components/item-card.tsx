"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Item } from "../lib/types";

interface ItemCardProps {
    item: Item;
    index?: number;
}

export function ItemCard({ item, index = 0 }: ItemCardProps) {
    console.log(item);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="group"
        >
            <Link href={`/item/${item.id}`}>
                <div className="glass-card overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                        <Image
                            src={item.images[0]}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {item.isSold && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="text-white font-semibold text-lg bg-black/60 px-4 py-1.5 rounded-full">
                                    Sold
                                </span>
                            </div>
                        )}
                        <Badge
                            variant="secondary"
                            className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs"
                        >
                            {item.category}
                        </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-medium text-gray-900 line-clamp-1 text-sm">
                                {item.title}
                            </h3>
                        </div>
                        <p className="text-lg font-semibold text-primary mb-3">
                            ₹{item.price.toLocaleString("en-IN")}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                <MapPin className="h-3 w-3" />
                                {item.campus}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Avatar className="h-5 w-5">
                                    <AvatarImage src={item.seller.avatar} alt={item.seller.name} />
                                    <AvatarFallback className="text-[9px]">
                                        {item.seller.name[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-xs text-gray-500">{item.seller.name.split(" ")[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
