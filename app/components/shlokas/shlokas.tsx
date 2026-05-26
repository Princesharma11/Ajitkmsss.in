import { useState } from 'react';
import styles from './shlokas.module.css';
import { SHLOKA_SECTIONS } from '~/data/shlokas';

export default function Shlokas() {
  const [activeId, setActiveId] = useState(SHLOKA_SECTIONS[0].id);

  const active = SHLOKA_SECTIONS.find((s) => s.id === activeId) ?? SHLOKA_SECTIONS[0];

  return (
    <section id="shlokas" className={styles.shlokaSection}>
      <div className={styles.mandalaLeft} />
      <div className={styles.mandalaRight} />

      <div className={styles.inner}>
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <span className={styles.badge}>Sacred Verses</span>
        </div>
        <h2 className={styles.mainTitle}>॥ श्लोक एवं मन्त्र ॥</h2>
        <p className={styles.mainSub}>Shlokas &amp; Mantras — The spiritual foundation of our institution</p>
        <div className={styles.ornament}>❧ ✦ ❧</div>

        <div className={styles.tabs}>
          {SHLOKA_SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`${styles.tab} ${activeId === s.id ? styles.tabActive : ''}`}
              onClick={() => setActiveId(s.id)}
            >
              {s.titleSanskrit}
            </button>
          ))}
        </div>

        <div className={styles.panel} key={active.id}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleSanskrit}>{active.titleSanskrit}</div>
            <div className={styles.sectionTitleHindi}>{active.titleHindi}</div>
            <div className={styles.divider} />
          </div>

          <div className={styles.verses}>
            {active.verses.map((verse, i) => (
              <div key={i} className={styles.verseCard}>
                <p className={styles.verseText}>{verse}</p>
              </div>
            ))}
          </div>

          {active.translation && (
            <div className={styles.translation}>
              <div className={styles.translationLabel}>Meaning</div>
              <p className={styles.translationText}>{active.translation}</p>
            </div>
          )}
        </div>

        <div className={styles.shlokaFooter}>ॐ शान्तिः शान्तिः शान्तिः</div>
      </div>
    </section>
  );
}
