"use client";
import React, { useEffect } from 'react';

interface ExtendedHTMLElement extends HTMLElement {
    x?: number;
    y?: number;
}

const CursorTrail: React.FC = () => {
    useEffect(() => {
        const circles: ExtendedHTMLElement[] = [];
        const numCircles = 25;

        // Create initial circles with zero position and size
        for (let i = 0; i < numCircles; i++) {
            circles.push({ x: 0, y: 0, size: 25 }); // Initial size can be adjusted
        }

        let mouseX = 0;
        let mouseY = 0;
        let isMouseMoving = false;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.pageX;
            mouseY = e.pageY - window.scrollY;
            isMouseMoving = true;
        };

        const updateCircles = () => {
            circles.forEach((circle, index) => {
                const targetX = index === 0 ? mouseX : circles[index - 1].x;
                const targetY = index === 0 ? mouseY : circles[index - 1].y;

                // Increase the damping factor for faster movement
                circle.x += (targetX - circle.x) * 0.6;
                circle.y += (targetY - circle.y) * 0.6;

                // Decrease size gradually based on index
                circle.size = 25 - (index * 0.8); // Adjust the rate of size decrease

                const circleElement = document.querySelector(`#circle-${index}`) as ExtendedHTMLElement;
                if (circleElement) {
                    circleElement.style.left = `${circle.x}px`;
                    circleElement.style.top = `${circle.y}px`;
                    circleElement.style.width = `${circle.size}px`; // Adjust width for circle effect
                    circleElement.style.height = `${circle.size}px`; // Adjust height for circle effect
                }
            });

            if (!isMouseMoving) {
                circles.forEach(circle => {
                    circle.x += (mouseX - circle.x) * 0.1;
                    circle.y += (mouseY - circle.y) * 0.1;
                });
            }

            requestAnimationFrame(updateCircles);
        };

        window.addEventListener("mousemove", handleMouseMove);
        updateCircles();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="circle-container">
            {Array.from({ length: 25 }).map((_, index) => (
                <div
                    key={index}
                    id={`circle-${index}`}
                    className="circle"
                    style={{ width: '25px', height: '25px' }} // Initial size can be adjusted here too
                ></div>
            ))}
        </div>
    );
};

export default CursorTrail;
