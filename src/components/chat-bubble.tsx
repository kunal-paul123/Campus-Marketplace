"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Message } from "@/lib/types";

interface ChatBubbleProps {
    message: Message;
    isOwn: boolean;
}

export function ChatBubble({ message, isOwn }: ChatBubbleProps) {
    const time = new Date(message.timestamp).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className={cn("flex mb-3", isOwn ? "justify-end" : "justify-start")}>
            <div
                className={cn(
                    "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm",
                    isOwn
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-gray-100 text-gray-900 rounded-bl-md"
                )}
            >
                <p className="leading-relaxed">{message.text}</p>
                <p
                    className={cn(
                        "text-[10px] mt-1",
                        isOwn ? "text-white/70 text-right" : "text-gray-400 text-right"
                    )}
                >
                    {time}
                </p>
            </div>
        </div>
    );
}
