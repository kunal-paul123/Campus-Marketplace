"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/animated-button";
import { UploadImage } from "@/components/upload-image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { categories, campuses } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export default function SellPage() {
    const [images, setImages] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="container py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md mx-auto text-center"
                >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Item Listed!</h2>
                    <p className="text-gray-500 mb-6">
                        Your item has been posted to the marketplace. Students in your campus can now see it.
                    </p>
                    <AnimatedButton onClick={() => setSubmitted(false)}>
                        Post Another Item
                    </AnimatedButton>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="container py-8">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Sell an Item
                </h1>
                <p className="text-gray-500 text-sm mb-8">
                    Fill in the details below to list your item on the marketplace.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Images */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Photos
                        </label>
                        <UploadImage images={images} onImagesChange={setImages} />
                    </div>

                    {/* Title */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Title
                        </label>
                        <Input placeholder="e.g., Engineering Mathematics Textbook" required />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Description
                        </label>
                        <Textarea
                            placeholder="Describe your item — condition, age, any defects..."
                            rows={4}
                            required
                        />
                    </div>

                    {/* Price + Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Price (₹)
                            </label>
                            <Input type="number" placeholder="0" min={0} required />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Category
                            </label>
                            <select
                                required
                                className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                                <option value="">Select category</option>
                                {categories.map((c) => (
                                    <option key={c.id} value={c.name}>
                                        {c.icon} {c.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Campus + Contact */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Campus
                            </label>
                            <select
                                required
                                className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                                <option value="">Select campus</option>
                                {campuses.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Contact Preference
                            </label>
                            <select className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                                <option value="chat">In-app Chat</option>
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                        </div>
                    </div>

                    <AnimatedButton type="submit" size="lg" className="w-full">
                        Post Item
                    </AnimatedButton>
                </form>
            </motion.div>
        </div>
    );
}
