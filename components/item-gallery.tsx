"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ItemGalleryProps {
    images: string[];
    title: string;
}

export function ItemGallery({ images, title }: ItemGalleryProps) {
    const [selected, setSelected] = useState(0);

    return (
        <div className="space-y-3">
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-50">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[selected]}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-2">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setSelected(i)}
                            className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === selected
                                    ? "border-primary"
                                    : "border-transparent hover:border-gray-300"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`${title} ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="64px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
