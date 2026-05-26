import type { Route } from './+types/staff';
import { useState } from 'react';
import { Link } from 'react-router';
import Navbar from '~/components/navbar/navbar';
import Footer from '~/components/footer/footer';
import { STAFF, STAFF_CATEGORIES, type StaffCategory } from '~/data/staff';
import styles from './staff.module.css';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Support Staff | AKMSSS' },
    {
      name: 'description',
      content: 'Meet the dedicated support staff of Ajit Kumar Mehta Sanskrit Sikshan Sansthan.',
    },
  ];
}

const ALL = 'all' as const;
type Filter = StaffCategory | typeof ALL;

export default function StaffPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>(ALL);

  const filtered = activeFilter === ALL
    ? STAFF
    : STAFF.filter((s) => s.category === activeFilter);

  const categories = Object.entries(STAFF_CATEGORIES) as [StaffCategory, typeof STAFF_CATEGORIES[StaffCategory]][];

  return (
    <div className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.sectionBadge}>Our People</div>
          <h1 className={styles.heroTitle}>Support Staff Directory</h1>
          <p className={styles.heroSub}>
            The backbone of our institution — dedicated individuals who keep our campus running every single day.
          </p>
          <Link to='/' className={styles.backLink}>← Back to Home</Link>
        </div>
      </section>

      <div className={styles.filterBar}>
        <button
          className={activeFilter === ALL ? `${styles.filterBtn} ${styles.filterActive}` : styles.filterBtn}
          onClick={() => setActiveFilter(ALL)}
        >
          All Staff
          <span className={styles.filterCount}>{STAFF.length}</span>
        </button>
        {categories.map(([key, meta]) => {
          const count = STAFF.filter((s) => s.category === key).length;
          if (count === 0) return null;
          return (
            <button
              key={key}
              className={activeFilter === key ? `${styles.filterBtn} ${styles.filterActive}` : styles.filterBtn}
              onClick={() => setActiveFilter(key)}
            >
              <span>{meta.icon}</span>
              {meta.label}
              <span className={styles.filterCount}>{count}</span>
            </button>
          );
        })}
      </div>

      <main className={styles.main}>
        <div className={styles.grid}>
          {filtered.map((member) => {
            const catMeta = STAFF_CATEGORIES[member.category];
            return (
              <div key={member.id} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className={styles.cardImage}
                    />
                  ) : (
                    <div className={styles.cardAvatar} style={{ background: catMeta.color }}>
                      <span>{member.initials}</span>
                    </div>
                  )}
                  <div className={styles.cardCategoryBadge} style={{ background: catMeta.color }}>
                    {catMeta.icon} {catMeta.label}
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardName}>{member.name}</h3>
                  <div className={styles.cardRole}>{member.role}</div>
                  <a href={`tel:${member.mobile}`} className={styles.cardPhone}>
                    📞 {member.mobile}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {STAFF.length < 30 && (
          <div className={styles.comingSoon}>
            <div className={styles.comingSoonIcon}>👥</div>
            <h3 className={styles.comingSoonTitle}>More Staff Profiles Coming Soon</h3>
            <p className={styles.comingSoonText}>
              We are in the process of adding profiles for all {30}–{40} staff members.
              Stay tuned as we continue to build our complete directory.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
