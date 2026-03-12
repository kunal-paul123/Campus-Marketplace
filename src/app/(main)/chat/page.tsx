"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, ArrowLeft } from "lucide-react";
import { ChatBubble } from "../../../../components/chat-bubble";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "../../../../components/ui/avatar";
import { conversations, chatMessages, currentUser } from "../../../../lib/data";
import { cn } from "../../../../lib/utils";
import { Conversation } from "../../../../lib/types";

export default function ChatPage() {
    const [selectedConv, setSelectedConv] = useState<Conversation | null>(
        conversations[0]
    );
    const [message, setMessage] = useState("");
    const [showList, setShowList] = useState(true);

    const handleSend = () => {
        if (message.trim()) {
            setMessage("");
        }
    };

    return (
        <div className="container py-4 md:py-8">
            <div className="glass-card overflow-hidden" style={{ height: "calc(100vh - 8rem)" }}>
                <div className="flex h-full">
                    {/* ── Conversation List ── */}
                    <div
                        className={cn(
                            "w-full md:w-80 border-r border-gray-100 flex flex-col",
                            selectedConv && !showList ? "hidden md:flex" : "flex"
                        )}
                    >
                        <div className="p-4 border-b border-gray-100">
                            <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {conversations.map((conv) => (
                                <button
                                    key={conv.id}
                                    onClick={() => {
                                        setSelectedConv(conv);
                                        setShowList(false);
                                    }}
                                    className={cn(
                                        "w-full flex items-center gap-3 p-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-50",
                                        selectedConv?.id === conv.id && "bg-blue-50/50"
                                    )}
                                >
                                    <Avatar className="h-10 w-10 shrink-0">
                                        <AvatarImage
                                            src={conv.participant.avatar}
                                            alt={conv.participant.name}
                                        />
                                        <AvatarFallback>
                                            {conv.participant.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-semibold text-gray-900 truncate">
                                                {conv.participant.name}
                                            </p>
                                            {conv.unreadCount > 0 && (
                                                <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white px-1.5">
                                                    {conv.unreadCount}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500 truncate mt-0.5">
                                            {conv.lastMessage.text}
                                        </p>
                                        <p className="text-[10px] text-gray-400 mt-0.5">
                                            {conv.itemTitle}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ── Chat Area ── */}
                    <div
                        className={cn(
                            "flex-1 flex flex-col",
                            !selectedConv || showList ? "hidden md:flex" : "flex"
                        )}
                    >
                        {selectedConv ? (
                            <>
                                {/* Chat header */}
                                <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                                    <button
                                        className="md:hidden"
                                        onClick={() => setShowList(true)}
                                    >
                                        <ArrowLeft className="h-5 w-5 text-gray-600" />
                                    </button>
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage
                                            src={selectedConv.participant.avatar}
                                            alt={selectedConv.participant.name}
                                        />
                                        <AvatarFallback>
                                            {selectedConv.participant.name[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900">
                                            {selectedConv.participant.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {selectedConv.itemTitle}
                                        </p>
                                    </div>
                                    <div className="relative h-9 w-9 rounded-lg overflow-hidden border border-gray-200">
                                        <Image
                                            src={selectedConv.itemImage}
                                            alt={selectedConv.itemTitle}
                                            fill
                                            className="object-cover"
                                            sizes="36px"
                                        />
                                    </div>
                                </div>

                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4">
                                    {chatMessages.map((msg) => (
                                        <ChatBubble
                                            key={msg.id}
                                            message={msg}
                                            isOwn={msg.senderId === currentUser.id}
                                        />
                                    ))}
                                </div>

                                {/* Input */}
                                <div className="p-4 border-t border-gray-100">
                                    <div className="flex gap-2">
                                        <Input
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Type a message..."
                                            className="bg-gray-50"
                                            onKeyDown={(e) =>
                                                e.key === "Enter" && handleSend()
                                            }
                                        />
                                        <Button onClick={handleSend} size="icon">
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 flex items-center justify-center text-center p-8">
                                <div>
                                    <p className="text-gray-400 text-sm">
                                        Select a conversation to start chatting
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
