import { useState, useEffect, useCallback } from "react";
import styles from "./campus-slider.module.css";

const SLIDES = [
  { src: "/images/campus-1.jpg", caption: "Faculty & Staff Gathering" },
  { src: "/images/campus-2.jpg", caption: "School Entrance Gate" },
  { src: "/images/campus-3.jpg", caption: "Community Assembly" },
  { src: "/images/campus-4.jpg", caption: "School Building" },
];

export default function CampusSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 400);
  }, [transitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className={styles.slider}>
      <div className={`${styles.slideWrapper} ${transitioning ? styles.fading : ""}`}>
        <img
          src={SLIDES[current].src}
          alt={SLIDES[current].caption}
          className={styles.slide}
        />
        <div className={styles.overlay}>
          <p className={styles.caption}>{SLIDES[current].caption}</p>
        </div>
      </div>
      <button className={`${styles.btn} ${styles.btnPrev}`} onClick={prev} aria-label="Previous">
        &#8249;
      </button>
      <button className={`${styles.btn} ${styles.btnNext}`} onClick={next} aria-label="Next">
        &#8250;
      </button>
      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
