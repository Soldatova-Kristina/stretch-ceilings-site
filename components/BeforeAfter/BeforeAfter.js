import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./BeforeAfter.module.css";

export default function BeforeAfter({ beforeSrc, afterSrc, title /* text */ }) {
  const [position, setPosition] = useState(50);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);
  const lastClickTimeRef = useRef(0);
  const DOUBLE_CLICK_DELAY = 300; // ms

  const clamp = (v) => Math.max(0, Math.min(100, v));

  const updatePosition = useCallback((clientX, snapToCenter = false) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const x = clientX - rect.left;
    let newPosition = clamp((x / rect.width) * 100);
    
    // Snap to 50% when within 2% of center
    if (snapToCenter && Math.abs(newPosition - 50) <= 2) {
      newPosition = 50;
    }
    
    setPosition(newPosition);
  }, []);

  // Глобальные pointer-события во время драга
  useEffect(() => {
    if (!isActive) return;
    const onMove = (e) => updatePosition(e.clientX ?? (e.touches?.[0]?.clientX ?? 0));
    const onUp = () => setIsActive(false);

    // Pointer Events покрывают мышь/тач/стилус
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("pointercancel", onUp, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointercancel", onUp);
    };
  }, [isActive, updatePosition]);

  const onPointerDown = (e) => {
    // Захватываем сразу, чтобы не терять события
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setIsActive(true);
    updatePosition(e.clientX);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); setPosition((p) => clamp(p - 1)); }
    else if (e.key === "ArrowRight") { e.preventDefault(); setPosition((p) => clamp(p + 1)); }
    else if (e.key === "PageUp") { e.preventDefault(); setPosition((p) => clamp(p + 10)); }
    else if (e.key === "PageDown") { e.preventDefault(); setPosition((p) => clamp(p - 10)); }
    else if (e.key === "Home") { e.preventDefault(); setPosition(0); }
    else if (e.key === "End") { e.preventDefault(); setPosition(100); }
  };

  const onContainerClick = (e) => {
    const currentTime = Date.now();
    const isDoubleClick = currentTime - lastClickTimeRef.current < DOUBLE_CLICK_DELAY;
    
    if (isDoubleClick) {
      // Reset to center on double-click
      setPosition(50);
    } else {
      // Single click: update position with snap
      updatePosition(e.clientX, true);
    }
    
    lastClickTimeRef.current = currentTime;
  };

  return (
    <div
      className={styles.sliderContainer}
      ref={containerRef}
      role="group"
      aria-label={`Сравнение до и после: ${title || "изображение"}`}
      onClick={onContainerClick}
    >
      {/* Hidden instructions for screen readers */}
      <div id="slider-instructions" className={styles.srOnly}>
        Используйте клавиши со стрелками для перемещения ползунка сравнения. 
        Нажмите Home для начала, End для конца, или дважды кликните для возврата в центр.
      </div>
      {/* After */}
      <div className={styles.afterImg}>
        <Image
          src={afterSrc}
          alt="После ремонта"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1480px) 50vw, 600px"
          style={{ objectFit: "cover" }}
          draggable={false}
          priority={false}
        />
      </div>
      <span className={styles.labelAfter} aria-hidden="true">ПОСЛЕ</span>

      {/* Before */}
      <div className={styles.beforeWrapper} style={{ width: `${position}%` }}>
        <div className={styles.beforeImg}>
          <Image
            src={beforeSrc}
            alt="До ремонта"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1480px) 50vw, 600px"
            style={{ objectFit: "cover" }}
            draggable={false}
            priority={false}
          />
        </div>
        <span className={styles.labelBefore} aria-hidden="true">ДО</span>
      </div>

      {/* Handle */}
      <div
        className={styles.handle}
        style={{ left: `${position}%` }}
        role="slider"
        aria-label="Ползунок сравнения изображений"
        aria-describedby="slider-instructions"
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)}% изображения 'до'`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
      >
        <div className={styles.handleButton} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}