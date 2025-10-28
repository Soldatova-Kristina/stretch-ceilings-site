import { useState, useRef, useEffect } from "react";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter({ beforeSrc, afterSrc, title, text }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const newPosition = (x / bounds.width) * 100;
    if (newPosition >= 0 && newPosition <= 100) setPosition(newPosition);
  };

  const handleTouch = (e) => {
    const touch = e.touches[0];
    const bounds = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - bounds.left;
    const newPosition = (x / bounds.width) * 100;
    if (newPosition >= 0 && newPosition <= 100) setPosition(newPosition);
  };

  useEffect(() => {
    const handleResize = () => setPosition(50);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={styles.sliderContainer}
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleTouch}
    >
      <img src={afterSrc} alt="After" className={styles.afterImg} />
      <span className={styles.labelAfter}>ПОСЛЕ</span>
      
      <div
        className={styles.beforeWrapper}
        style={{ width: `${position}%` }}
      >
        <img src={beforeSrc} alt="Before" className={styles.beforeImg} />
        <span className={styles.labelBefore}>ДО</span>
      </div>
      
      <div
        className={styles.handle}
        style={{ left: `${position}%` }}
      >
        <div className={styles.line}></div>
      </div>
    </div>
  );
}