import { useEffect } from 'react';

const useCursorEffect = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = Array.from(document.querySelectorAll(".circle"));
    const cursor = document.createElement("div");

    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = "white";
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount
};

export default useCursorEffect;
