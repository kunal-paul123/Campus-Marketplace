"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface CategoryFilterProps {
    categories: { id: string; name: string; icon: string }[];
    selected: string;
    onSelect: (category: string) => void;
}

export function CategoryFilter({
    categories,
    selected,
    onSelect,
}: CategoryFilterProps) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
                onClick={() => onSelect("All")}
                className={cn(
                    "flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    selected === "All"
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
            >
                All
            </button>
            {categories.map((cat) => (
                <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSelect(cat.name)}
                    className={cn(
                        "flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        selected === cat.name
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                >
                    <span>{cat.icon}</span>
                    {cat.name}
                </motion.button>
            ))}
        </div>
    );
}
