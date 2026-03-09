"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";

interface UploadImageProps {
    images: string[];
    onImagesChange: (images: string[]) => void;
    maxImages?: number;
}

export function UploadImage({
    images,
    onImagesChange,
    maxImages = 5,
}: UploadImageProps) {
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);

            if (e.dataTransfer.files) {
                handleFiles(e.dataTransfer.files);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [images]
    );

    const handleFiles = (files: FileList) => {
        const newImages: string[] = [];
        Array.from(files).forEach((file) => {
            if (file.type.startsWith("image/") && images.length + newImages.length < maxImages) {
                const url = URL.createObjectURL(file);
                newImages.push(url);
            }
        });
        onImagesChange([...images, ...newImages]);
    };

    const removeImage = (index: number) => {
        const updated = images.filter((_, i) => i !== index);
        onImagesChange(updated);
    };

    return (
        <div className="space-y-3">
            {/* Drop Zone */}
            <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 transition-colors cursor-pointer ${dragActive
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300 bg-gray-50"
                    }`}
            >
                <Upload className="h-8 w-8 text-gray-400 mb-3" />
                <p className="text-sm text-gray-600 font-medium">
                    Drag & drop images here
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    or click to browse ({images.length}/{maxImages})
                </p>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => e.target.files && handleFiles(e.target.files)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
            </div>

            {/* Previews */}
            {images.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                    {images.map((img, i) => (
                        <div key={i} className="relative w-20 h-20 rounded-lg overflow-hidden group">
                            <Image
                                src={img}
                                alt={`Upload ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="80px"
                            />
                            <button
                                onClick={() => removeImage(i)}
                                className="absolute top-1 right-1 h-5 w-5 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <X className="h-3 w-3 text-white" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
