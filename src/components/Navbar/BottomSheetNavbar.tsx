import {useEffect, useRef, ReactNode} from "react";
import {motion, AnimatePresence} from "framer-motion";

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

/**
 * Hook to lock body scroll when bottom sheet is open
 */
function useBodyScrollLock(isLocked: boolean) {
    useEffect(() => {
        document.body.style.overflow = isLocked ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isLocked]);
}

/**
 * BottomSheetNavbar component with swipe-down-to-close gesture
 */
export default function BottomSheetNavbar({isOpen, onClose, children}: BottomSheetProps) {
    const sheetRef = useRef<HTMLDivElement>(null);

    // Add touch gesture for swipe down to close
    useEffect(() => {
        if (!sheetRef.current) return;
        let startY = 0;

        const touchStart = (e: TouchEvent) => {
            startY = e.touches[0].clientY;
        };
        const touchMove = (e: TouchEvent) => {
            const delta = e.touches[0].clientY - startY;
            if (delta > 50) onClose();
        };

        const el = sheetRef.current;
        el.addEventListener("touchstart", touchStart);
        el.addEventListener("touchmove", touchMove);

        return () => {
            el.removeEventListener("touchstart", touchStart);
            el.removeEventListener("touchmove", touchMove);
        };
    }, [onClose]);

    useBodyScrollLock(isOpen);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    />

                    {/* Sheet Panel */}
                    <motion.div
                        ref={sheetRef}
                        className="fixed bottom-0 w-full z-50 bg-white rounded-t-xl p-4 max-h-[70%] overflow-y-auto"
                        initial={{y: "100%"}}
                        animate={{y: 0}}
                        exit={{y: "100%"}}
                        transition={{type: "tween", duration: 0.3}}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}