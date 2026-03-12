import React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-gray-50/50 mt-20">
            <div className="container py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">
                                C
                            </div>
                            <span className="font-semibold text-gray-900">CampusMarket</span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The trusted marketplace for college students to buy and sell within their campus.
                        </p>
                    </div>

                    {/* Marketplace */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Marketplace</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/browse" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                    Browse Items
                                </Link>
                            </li>
                            <li>
                                <Link href="/sell" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                    Sell an Item
                                </Link>
                            </li>
                            <li>
                                <Link href="/browse" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                                    Categories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <span className="text-sm text-gray-500">Help Center</span>
                            </li>
                            <li>
                                <span className="text-sm text-gray-500">Safety Tips</span>
                            </li>
                            <li>
                                <span className="text-sm text-gray-500">Contact Us</span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <span className="text-sm text-gray-500">Terms of Service</span>
                            </li>
                            <li>
                                <span className="text-sm text-gray-500">Privacy Policy</span>
                            </li>
                            <li>
                                <span className="text-sm text-gray-500">Cookie Policy</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-gray-400">
                        © 2026 CampusMarket. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-400">
                        Made with ❤️ for college students
                    </p>
                </div>
            </div>
        </footer>
    );
}
