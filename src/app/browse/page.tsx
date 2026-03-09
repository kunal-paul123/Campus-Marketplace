"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { CategoryFilter } from "@/components/category-filter";
import { ItemCard } from "@/components/item-card";
import { ItemCardSkeleton } from "@/components/item-card-skeleton";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { items, categories, campuses } from "@/lib/data";

export default function BrowsePage() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedCampus, setSelectedCampus] = useState("All");
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
    const [showFilters, setShowFilters] = useState(false);
    const [isLoading] = useState(false);

    const filtered = useMemo(() => {
        return items.filter((item) => {
            const matchSearch =
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase());
            const matchCategory =
                selectedCategory === "All" || item.category === selectedCategory;
            const matchCampus =
                selectedCampus === "All" || item.campus === selectedCampus;
            const matchPrice =
                item.price >= priceRange[0] && item.price <= priceRange[1];
            return matchSearch && matchCategory && matchCampus && matchPrice;
        });
    }, [search, selectedCategory, selectedCampus, priceRange]);

    return (
        <div className="container py-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Browse Marketplace
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                    {filtered.length} items available
                </p>
            </motion.div>

            {/* Search & Category */}
            <div className="space-y-4 mb-6">
                <div className="flex gap-3 items-center">
                    <SearchBar value={search} onChange={setSearch} />
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setShowFilters(!showFilters)}
                        className="shrink-0"
                    >
                        <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                </div>
                <CategoryFilter
                    categories={categories}
                    selected={selectedCategory}
                    onSelect={setSelectedCategory}
                />
            </div>

            {/* Extra Filters */}
            {showFilters && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="glass-card p-4 mb-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Campus Filter */}
                        <div>
                            <label className="text-xs font-medium text-gray-600 mb-1.5 block">
                                Campus
                            </label>
                            <select
                                value={selectedCampus}
                                onChange={(e) => setSelectedCampus(e.target.value)}
                                className="w-full h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="All">All Campuses</option>
                                {campuses.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Min Price */}
                        <div>
                            <label className="text-xs font-medium text-gray-600 mb-1.5 block">
                                Min Price (₹)
                            </label>
                            <input
                                type="number"
                                value={priceRange[0]}
                                onChange={(e) =>
                                    setPriceRange([Number(e.target.value), priceRange[1]])
                                }
                                className="w-full h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                min={0}
                            />
                        </div>

                        {/* Max Price */}
                        <div>
                            <label className="text-xs font-medium text-gray-600 mb-1.5 block">
                                Max Price (₹)
                            </label>
                            <input
                                type="number"
                                value={priceRange[1]}
                                onChange={(e) =>
                                    setPriceRange([priceRange[0], Number(e.target.value)])
                                }
                                className="w-full h-10 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                                min={0}
                            />
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Items Grid */}
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <ItemCardSkeleton key={i} />
                    ))}
                </div>
            ) : filtered.length === 0 ? (
                <EmptyState
                    title="No items found"
                    description="Try changing your filters or search term."
                />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map((item, i) => (
                        <ItemCard key={item.id} item={item} index={i} />
                    ))}
                </div>
            )}
        </div>
    );
}
