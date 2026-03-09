import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function ItemCardSkeleton() {
    return (
        <div className="glass-card overflow-hidden">
            <Skeleton className="aspect-[4/3] rounded-none" />
            <div className="p-4 space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-5 w-1/3" />
                <div className="flex items-center justify-between">
                    <Skeleton className="h-3 w-1/4" />
                    <div className="flex items-center gap-1.5">
                        <Skeleton className="h-5 w-5 rounded-full" />
                        <Skeleton className="h-3 w-12" />
                    </div>
                </div>
            </div>
        </div>
    );
}
