"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, Pencil } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../../components/ui/tabs";
import { ItemCard } from "../../../../components/item-card";
import { EmptyState } from "../../../../components/empty-state";
import { currentUser, items } from "../../../../lib/data";

export default function ProfilePage() {
    const listedItems = items.filter(
        (i) => i.seller.id === currentUser.id && !i.isSold
    );
    const soldItems = items.filter(
        (i) => i.seller.id === currentUser.id && i.isSold
    );

    return (
        <div className="container py-8">
            {/* Profile Header */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-6 md:p-8 mb-8"
            >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                        <AvatarFallback className="text-xl">
                            {currentUser.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {currentUser.name}
                        </h1>
                        <div className="flex flex-col sm:flex-row items-center gap-2 mt-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <Mail className="h-3.5 w-3.5" />
                                {currentUser.email}
                            </div>
                            <span className="hidden sm:inline text-gray-300">•</span>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                Joined{" "}
                                {new Date(currentUser.joinedDate).toLocaleDateString("en-IN", {
                                    year: "numeric",
                                    month: "long",
                                })}
                            </div>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-3 mt-3">
                            <Badge variant="secondary">
                                {currentUser.campus}
                            </Badge>
                            <span className="text-xs text-gray-500">
                                {currentUser.itemsListed} listed · {currentUser.itemsSold} sold
                            </span>
                        </div>
                    </div>
                    <Button variant="outline" className="gap-2 shrink-0">
                        <Pencil className="h-3.5 w-3.5" />
                        Edit Profile
                    </Button>
                </div>
            </motion.div>

            {/* Tabs */}
            <Tabs defaultValue="listed">
                <TabsList className="mb-6">
                    <TabsTrigger value="listed">
                        Listed ({listedItems.length})
                    </TabsTrigger>
                    <TabsTrigger value="sold">
                        Sold ({soldItems.length})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="listed">
                    {listedItems.length === 0 ? (
                        <EmptyState
                            title="No items listed"
                            description="Start selling by posting your first item."
                        />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {listedItems.map((item, i) => (
                                <ItemCard key={item.id} item={item} index={i} />
                            ))}
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="sold">
                    {soldItems.length === 0 ? (
                        <EmptyState
                            title="No items sold yet"
                            description="Your sold items will appear here."
                        />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {soldItems.map((item, i) => (
                                <ItemCard key={item.id} item={item} index={i} />
                            ))}
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}
