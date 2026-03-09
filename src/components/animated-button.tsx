"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonProps { }

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Button ref={ref} className={cn("shadow-sm", className)} {...props}>
                    {children}
                </Button>
            </motion.div>
        );
    }
);
AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
