"use client";
import React, { useEffect } from 'react';

interface Circle {
    x: number;
    y: number;
    size: number;
}

const CursorTrail: React.FC = () => {
    useEffect(() => {
        const circles: Circle[] = [];
        const numCircles = 25;

        for (let i = 0; i < numCircles; i++) {
            circles.push({ x: 0, y: 0, size: 25 });
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

                circle.x += (targetX - circle.x) * 0.6;
                circle.y += (targetY - circle.y) * 0.6;

                circle.size = 25 - (index * 0.8);

                const circleElement = document.querySelector(`#circle-${index}`) as HTMLElement;
                if (circleElement) {
                    circleElement.style.left = `${circle.x}px`;
                    circleElement.style.top = `${circle.y}px`;
                    circleElement.style.width = `${circle.size}px`;
                    circleElement.style.height = `${circle.size}px`;
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
                    style={{
                        width: '25px',
                        height: '25px',
                        position: 'absolute', // Position circles absolutely
                        borderRadius: '50%', // Make circles round
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent background for visibility
                        pointerEvents: 'none' // Prevent circle elements from interfering with pointer events
                    }}
                ></div>
            ))}
        </div>
    );
};

export default CursorTrail;
