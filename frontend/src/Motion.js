import { frame, motion, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

export default function Drag() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <motion.div
            ref={ref}
            style={{
                ...ball,
                x,
                y,
                position: "fixed",         // 👈 stays on top even while scrolling
                top: 0,
                left: 0,
                zIndex: 9999,              // 👈 renders above everything
                pointerEvents: "none",     // 👈 doesn't block clicks
            }}
        />
    );
}

const ball = {
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundImage: "url('/assets/images/code.webp')", // ✅ correct string syntax
    backgroundSize: "cover",      // ✅ makes sure the image fits
    backgroundPosition: "center", // ✅ centers the image inside the div
};

const spring = {
    damping: 10,
    stiffness: 100,
    restDelta: 0.5,
};

export function useFollowPointer(ref) {
    const x = useSpring(0, spring);
    const y = useSpring(0, spring);

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }) => {
            const element = ref.current;

            frame.read(() => {
                x.set(clientX - element.offsetWidth / 2);
                y.set(clientY - element.offsetHeight / 2);
            });
        };

        window.addEventListener("pointermove", handlePointerMove);
        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return { x, y };
}
