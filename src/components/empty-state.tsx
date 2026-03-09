"use client";

import React from "react";
import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

interface EmptyStateProps {
    title?: string;
    description?: string;
}

export function EmptyState({
    title = "Nothing here yet",
    description = "Check back later or try a different search.",
}: EmptyStateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-4">
                <PackageOpen className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 max-w-sm">{description}</p>
        </motion.div>
    );
}
