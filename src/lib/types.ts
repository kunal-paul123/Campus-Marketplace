export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    campus: string;
    joinedDate: string;
    itemsListed: number;
    itemsSold: number;
}

export interface Item {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    campus: string;
    images: string[];
    seller: User;
    createdAt: string;
    isSold: boolean;
    condition: string;
}

export interface Category {
    id: string;
    name: string;
    icon: string;
    count: number;
}

export interface Message {
    id: string;
    senderId: string;
    text: string;
    timestamp: string;
    isRead: boolean;
}

export interface Conversation {
    id: string;
    participant: User;
    lastMessage: Message;
    itemTitle: string;
    itemImage: string;
    unreadCount: number;
}
