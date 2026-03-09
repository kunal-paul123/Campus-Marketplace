import { Item, User, Category, Conversation, Message } from "./types";

// ── Dummy Users ──────────────────────────────────────────────────────
export const users: User[] = [
    {
        id: "u1",
        name: "Arjun Mehta",
        email: "arjun.mehta@iitd.ac.in",
        avatar: "https://i.pravatar.cc/150?img=11",
        campus: "IIT Delhi",
        joinedDate: "2025-08-15",
        itemsListed: 5,
        itemsSold: 3,
    },
    {
        id: "u2",
        name: "Priya Sharma",
        email: "priya.sharma@bits.ac.in",
        avatar: "https://i.pravatar.cc/150?img=5",
        campus: "BITS Pilani",
        joinedDate: "2025-09-20",
        itemsListed: 8,
        itemsSold: 6,
    },
    {
        id: "u3",
        name: "Rohan Gupta",
        email: "rohan.gupta@iitb.ac.in",
        avatar: "https://i.pravatar.cc/150?img=12",
        campus: "IIT Bombay",
        joinedDate: "2025-07-10",
        itemsListed: 3,
        itemsSold: 2,
    },
    {
        id: "u4",
        name: "Sneha Patel",
        email: "sneha.patel@nit.ac.in",
        avatar: "https://i.pravatar.cc/150?img=9",
        campus: "NIT Trichy",
        joinedDate: "2025-10-01",
        itemsListed: 6,
        itemsSold: 4,
    },
    {
        id: "u5",
        name: "Karan Singh",
        email: "karan.singh@vit.ac.in",
        avatar: "https://i.pravatar.cc/150?img=8",
        campus: "VIT Vellore",
        joinedDate: "2025-11-05",
        itemsListed: 4,
        itemsSold: 1,
    },
];

// ── Categories ───────────────────────────────────────────────────────
export const categories: Category[] = [
    { id: "c1", name: "Books", icon: "📚", count: 42 },
    { id: "c2", name: "Electronics", icon: "💻", count: 38 },
    { id: "c3", name: "Bikes", icon: "🚲", count: 15 },
    { id: "c4", name: "Calculators", icon: "🔢", count: 12 },
    { id: "c5", name: "Hostel Items", icon: "🛏️", count: 28 },
    { id: "c6", name: "Furniture", icon: "🪑", count: 20 },
];

export const campuses = [
    "IIT Delhi",
    "IIT Bombay",
    "BITS Pilani",
    "NIT Trichy",
    "VIT Vellore",
];

// ── Dummy Items ──────────────────────────────────────────────────────
export const items: Item[] = [
    {
        id: "1",
        title: "Engineering Mathematics by B.S. Grewal",
        description:
            "Slightly used, all pages intact. Covers differential equations, linear algebra, and more. Perfect for first-year engineering students. Highlighted key theorems and formulas.",
        price: 350,
        category: "Books",
        campus: "IIT Delhi",
        images: [
            "https://picsum.photos/seed/book1/800/600",
            "https://picsum.photos/seed/book1a/800/600",
            "https://picsum.photos/seed/book1b/800/600",
        ],
        seller: users[0],
        createdAt: "2026-03-01",
        isSold: false,
        condition: "Good",
    },
    {
        id: "2",
        title: 'Dell 24" Monitor – Full HD IPS',
        description:
            "Full HD IPS panel, excellent color accuracy. Great for coding and watching lectures. Comes with HDMI cable and original box. Used for 6 months.",
        price: 8500,
        category: "Electronics",
        campus: "BITS Pilani",
        images: [
            "https://picsum.photos/seed/monitor1/800/600",
            "https://picsum.photos/seed/monitor1a/800/600",
        ],
        seller: users[1],
        createdAt: "2026-02-28",
        isSold: false,
        condition: "Like New",
    },
    {
        id: "3",
        title: "Hero Sprint Bicycle – 21 Gear",
        description:
            "21-speed gear bicycle in great condition. Ideal for campus commute. Recently serviced with new brake pads. Comes with a lock and a pump.",
        price: 4200,
        category: "Bikes",
        campus: "IIT Bombay",
        images: [
            "https://picsum.photos/seed/bike1/800/600",
            "https://picsum.photos/seed/bike1a/800/600",
            "https://picsum.photos/seed/bike1b/800/600",
        ],
        seller: users[2],
        createdAt: "2026-02-25",
        isSold: false,
        condition: "Good",
    },
    {
        id: "4",
        title: "Casio fx-991EX Scientific Calculator",
        description:
            "Barely used Casio scientific calculator. Perfect for exams and lab work. Includes protective case. Battery at full capacity.",
        price: 900,
        category: "Calculators",
        campus: "NIT Trichy",
        images: [
            "https://picsum.photos/seed/calc1/800/600",
            "https://picsum.photos/seed/calc1a/800/600",
        ],
        seller: users[3],
        createdAt: "2026-02-20",
        isSold: false,
        condition: "Like New",
    },
    {
        id: "5",
        title: "Study Table with Drawer",
        description:
            "Sturdy wooden study table with a storage drawer. Perfect for hostel rooms. Dimensions: 120x60x75 cm. Disassembles easily for transport.",
        price: 2200,
        category: "Furniture",
        campus: "VIT Vellore",
        images: [
            "https://picsum.photos/seed/table1/800/600",
            "https://picsum.photos/seed/table1a/800/600",
        ],
        seller: users[4],
        createdAt: "2026-02-18",
        isSold: false,
        condition: "Good",
    },
    {
        id: "6",
        title: "Mattress – Single Bed (Cotton)",
        description:
            "Comfortable cotton mattress for single bed. Used for one semester. No stains, freshly cleaned. 6 inches thick, medium-firm.",
        price: 1500,
        category: "Hostel Items",
        campus: "IIT Delhi",
        images: [
            "https://picsum.photos/seed/mattress1/800/600",
            "https://picsum.photos/seed/mattress1a/800/600",
        ],
        seller: users[0],
        createdAt: "2026-02-15",
        isSold: false,
        condition: "Good",
    },
    {
        id: "7",
        title: "Logitech Wireless Mouse MX Master 3",
        description:
            "Ergonomic wireless mouse with USB-C charging. Excellent scroll wheel, works on any surface. 3 months old with original packaging.",
        price: 5500,
        category: "Electronics",
        campus: "BITS Pilani",
        images: [
            "https://picsum.photos/seed/mouse1/800/600",
            "https://picsum.photos/seed/mouse1a/800/600",
        ],
        seller: users[1],
        createdAt: "2026-02-12",
        isSold: false,
        condition: "Like New",
    },
    {
        id: "8",
        title: "Introduction to Algorithms – CLRS",
        description:
            "The classic algorithms textbook, 3rd edition. A must-have for computer science students. Minor wear on the cover, pages in excellent condition.",
        price: 500,
        category: "Books",
        campus: "IIT Bombay",
        images: [
            "https://picsum.photos/seed/book2/800/600",
            "https://picsum.photos/seed/book2a/800/600",
        ],
        seller: users[2],
        createdAt: "2026-02-10",
        isSold: true,
        condition: "Good",
    },
    {
        id: "9",
        title: "Desk Lamp – LED with USB Port",
        description:
            "Adjustable LED desk lamp with built-in USB charging port. 3 brightness levels and warm/cool light toggle. Perfect for late-night study sessions.",
        price: 800,
        category: "Hostel Items",
        campus: "NIT Trichy",
        images: [
            "https://picsum.photos/seed/lamp1/800/600",
            "https://picsum.photos/seed/lamp1a/800/600",
        ],
        seller: users[3],
        createdAt: "2026-02-08",
        isSold: false,
        condition: "Good",
    },
    {
        id: "10",
        title: "JBL Flip 5 Bluetooth Speaker",
        description:
            "Waterproof portable speaker with powerful bass. Battery lasts 12+ hours. Great for hostel parties and outdoor use. Comes with charging cable.",
        price: 6000,
        category: "Electronics",
        campus: "VIT Vellore",
        images: [
            "https://picsum.photos/seed/speaker1/800/600",
            "https://picsum.photos/seed/speaker1a/800/600",
        ],
        seller: users[4],
        createdAt: "2026-02-05",
        isSold: false,
        condition: "Good",
    },
    {
        id: "11",
        title: "Office Chair – Ergonomic Mesh",
        description:
            "Ergonomic mesh office chair with lumbar support. Adjustable height and armrests. Great for long study sessions. Barely used for a semester.",
        price: 3800,
        category: "Furniture",
        campus: "IIT Delhi",
        images: [
            "https://picsum.photos/seed/chair1/800/600",
            "https://picsum.photos/seed/chair1a/800/600",
        ],
        seller: users[0],
        createdAt: "2026-02-02",
        isSold: false,
        condition: "Like New",
    },
    {
        id: "12",
        title: "Bajaj Room Heater – 2000W",
        description:
            "Powerful room heater with 2 heat settings. Keeps your hostel room warm during winters. Safety cut-off feature. Used for one winter season.",
        price: 1200,
        category: "Hostel Items",
        campus: "IIT Delhi",
        images: [
            "https://picsum.photos/seed/heater1/800/600",
            "https://picsum.photos/seed/heater1a/800/600",
        ],
        seller: users[0],
        createdAt: "2026-01-30",
        isSold: false,
        condition: "Good",
    },
];

// ── Dummy Conversations ──────────────────────────────────────────────
export const conversations: Conversation[] = [
    {
        id: "conv1",
        participant: users[1],
        lastMessage: {
            id: "m1",
            senderId: "u2",
            text: "Is the monitor still available?",
            timestamp: "2026-03-09T10:30:00",
            isRead: false,
        },
        itemTitle: 'Dell 24" Monitor – Full HD IPS',
        itemImage: "https://picsum.photos/seed/monitor1/800/600",
        unreadCount: 2,
    },
    {
        id: "conv2",
        participant: users[2],
        lastMessage: {
            id: "m2",
            senderId: "u1",
            text: "Sure, you can pick it up from the hostel gate.",
            timestamp: "2026-03-08T16:45:00",
            isRead: true,
        },
        itemTitle: "Hero Sprint Bicycle – 21 Gear",
        itemImage: "https://picsum.photos/seed/bike1/800/600",
        unreadCount: 0,
    },
    {
        id: "conv3",
        participant: users[3],
        lastMessage: {
            id: "m3",
            senderId: "u4",
            text: "Can you do ₹800 for the calculator?",
            timestamp: "2026-03-07T09:15:00",
            isRead: true,
        },
        itemTitle: "Casio fx-991EX Scientific Calculator",
        itemImage: "https://picsum.photos/seed/calc1/800/600",
        unreadCount: 0,
    },
];

export const chatMessages: Message[] = [
    {
        id: "m10",
        senderId: "u2",
        text: "Hey, I saw your listing for the Dell monitor.",
        timestamp: "2026-03-09T10:00:00",
        isRead: true,
    },
    {
        id: "m11",
        senderId: "u1",
        text: "Hi! Yes, it's still available. Are you interested?",
        timestamp: "2026-03-09T10:05:00",
        isRead: true,
    },
    {
        id: "m12",
        senderId: "u2",
        text: "Definitely! What's the lowest you can go?",
        timestamp: "2026-03-09T10:10:00",
        isRead: true,
    },
    {
        id: "m13",
        senderId: "u1",
        text: "I can do ₹8,000. It's practically new with the original box and cables.",
        timestamp: "2026-03-09T10:15:00",
        isRead: true,
    },
    {
        id: "m14",
        senderId: "u2",
        text: "Sounds good! Can I come check it out today?",
        timestamp: "2026-03-09T10:25:00",
        isRead: true,
    },
    {
        id: "m15",
        senderId: "u2",
        text: "Is the monitor still available?",
        timestamp: "2026-03-09T10:30:00",
        isRead: false,
    },
];

// ── Current (logged in) user placeholder ─────────────────────────────
export const currentUser: User = users[0];
