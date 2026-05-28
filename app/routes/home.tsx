import type { Route } from "./+types/home";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import styles from "./home.module.css";
import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import CampusSlider from "~/components/campus-slider/campus-slider";
import { STAFF, STAFF_CATEGORIES } from "~/data/staff";
import Shlokas from "~/components/shlokas/shlokas";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ajit Kumar Mehta Sanskrit Sikshan Sansthan - AKMSSS" },
    {
      name: "description",
      content: "Ajit Kumar Mehta Sanskrit Sikshan Sansthan - Central Sanskrit University Delhi recognized institution offering Sanskrit education in Ladaura, Samastipur, Bihar.",
    },
  ];
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const COURSES = [
  { name: "Prathma", level: "Foundation", desc: "Entry-level Sanskrit study introducing grammar, scripture and classical texts." },
  { name: "Purba Madhyama", level: "Pre-Intermediate", desc: "Building proficiency in Sanskrit language, literature and classical compositions." },
  { name: "Prak Shashtri", level: "Pre-Degree", desc: "Advanced preparation covering Vedic texts, poetics and philosophical traditions." },
  { name: "Shashtri", level: "Degree", desc: "Equivalent to a Bachelor's degree - comprehensive study of Sanskrit Shastra." },
  { name: "Acharya", level: "Post-Graduate", desc: "Masters-level specialisation in Sanskrit Sahitya, Vyakarana or Jyotish." },
];

const SUBJECTS = [
  { name: "Sanskrit Sahitya", icon: "📖", desc: "Classical Sanskrit literature including Kavya, Nataka, and ancient scriptures." },
  { name: "Vyakarana", icon: "🔤", desc: "Paninian grammar, Ashtadhyayi, linguistic science and Sanskrit morphology." },
  { name: "Jyotish", icon: "⭐", desc: "Vedic astrology, astronomy and the mathematical traditions of ancient India." },
];

const STATS = [
  { value: "40+", label: "Years of Excellence" },
  { value: "5", label: "Courses Offered" },
  { value: "3", label: "Specialised Subjects" },
  { value: "1984", label: "Established" },
];

function CoursesSection() {
  const reveal = useScrollReveal();
  return (
    <section id="courses" className={styles.section} ref={reveal.ref}>
      <div className={reveal.visible ? `${styles.sectionInner} ${styles.revealed}` : styles.sectionInner}>
        <div className={styles.sectionBadge}>Academic Programmes</div>
        <h2 className={styles.sectionTitle}>Courses We Offer</h2>
        <p className={styles.sectionSub}>
          Five levels of Sanskrit education recognized by Central Sanskrit University, Delhi
        </p>
        <div className={styles.coursesGrid}>
          {COURSES.map((c, i) => (
            <div key={c.name} className={styles.courseCard} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={styles.courseLevel}>{c.level}</div>
              <h3 className={styles.courseName}>{c.name}</h3>
              <p className={styles.courseDesc}>{c.desc}</p>
              <div className={styles.courseAccent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubjectsSection() {
  const reveal = useScrollReveal();
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={reveal.visible ? `${styles.sectionInner} ${styles.revealed}` : styles.sectionInner} ref={reveal.ref}>
        <div className={styles.sectionBadge}>Disciplines</div>
        <h2 className={styles.sectionTitle}>Subjects</h2>
        <p className={styles.sectionSub}>Core Sanskrit disciplines taught by experienced scholars</p>
        <div className={styles.subjectsGrid}>
          {SUBJECTS.map((s) => (
            <div key={s.name} className={styles.subjectCard}>
              <span className={styles.subjectIcon}>{s.icon}</span>
              <h3 className={styles.subjectName}>{s.name}</h3>
              <p className={styles.subjectDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const reveal = useScrollReveal();
  return (
    <section id="leadership" className={styles.section}>
      <div className={reveal.visible ? `${styles.sectionInner} ${styles.revealed}` : styles.sectionInner} ref={reveal.ref}>
        <div className={styles.sectionBadge}>Our Leadership</div>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <p className={styles.sectionSub}>Dedicated leaders committed to preserving and promoting Sanskrit knowledge</p>
        <div className={styles.leadershipGrid}>
          <div className={styles.leaderCard}>
            <div className={styles.leaderImageWrap}>
              <img src="/images/principal.jpg" alt="Sri Dharmendra Kumar" className={styles.leaderImage} />
              <div className={styles.leaderImageGlow} />
            </div>
            <div className={styles.leaderInfo}>
              <div className={styles.leaderRole}>Principal In Charge</div>
              <h3 className={styles.leaderName}>Sri Dharmendra Kumar</h3>
              <p className={styles.leaderMsg}>
                Our institution stands as a beacon of Sanskrit learning, carrying forward the timeless wisdom
                of our ancient texts for future generations. We are committed to excellence in Vedic education.
              </p>
            </div>
          </div>
          <div className={styles.leaderCard}>
            <div className={styles.leaderImageWrap}>
              <img src="/images/staff/umakant-singh.jpg" alt="Umakant Singh" className={styles.leaderImage} />
              <div className={styles.leaderImageGlow} />
            </div>
            <div className={styles.leaderInfo}>
              <div className={styles.leaderRole}>Secretary</div>
              <h3 className={styles.leaderName}>Umakant Singh</h3>
              <p className={styles.leaderMsg}>
                Together we build an institution where every student can discover the profound beauty
                of Sanskrit language and the rich cultural heritage it embodies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StaffPreviewSection() {
  const reveal = useScrollReveal();
  const preview = STAFF.slice(0, 4);
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={reveal.visible ? `${styles.sectionInner} ${styles.revealed}` : styles.sectionInner} ref={reveal.ref}>
        <div className={styles.sectionBadge}>Our People</div>
        <h2 className={styles.sectionTitle}>Support Staff</h2>
        <p className={styles.sectionSub}>
          The backbone of our institution — from security guards to gardeners, each member plays a vital role.
        </p>
        <div className={styles.staffPreviewGrid}>
          {preview.map((member) => {
            const cat = STAFF_CATEGORIES[member.category];
            return (
              <div key={member.id} className={styles.staffPreviewCard}>
                <div className={styles.staffPreviewImgWrap}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className={styles.staffPreviewImg} />
                  ) : (
                    <div className={styles.staffPreviewAvatar} style={{ background: cat.color }}>
                      {member.initials}
                    </div>
                  )}
                </div>
                <div className={styles.staffPreviewBody}>
                  <div className={styles.staffPreviewCat} style={{ color: cat.color }}>{cat.icon} {cat.label}</div>
                  <h4 className={styles.staffPreviewName}>{member.name}</h4>
                  <div className={styles.staffPreviewRole}>{member.role}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.staffPreviewCta}>
          <Link to="/staff" className={styles.staffViewAll}>
            View Full Staff Directory ({STAFF.length} members) →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CampusTourSection() {
  const reveal = useScrollReveal();
  return (
    <section id="campus" className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={reveal.visible ? `${styles.sectionInner} ${styles.revealed}` : styles.sectionInner} ref={reveal.ref}>
        <div className={styles.sectionBadge}>Campus Life</div>
        <h2 className={styles.sectionTitle}>Take a Campus Tour</h2>
        <p className={styles.sectionSub}>Explore our vibrant campus in Ladaura, Samastipur, Bihar</p>
        <CampusSlider />
      </div>
    </section>
  );
}

function ContactSection() {
  const reveal = useScrollReveal();
  return (
    <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
      <div className={reveal.visible ? `${styles.sectionInner} ${styles.revealed}` : styles.sectionInner} ref={reveal.ref}>
        <div className={styles.sectionBadge}>Get In Touch</div>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.sectionSub}>We welcome inquiries about admissions and academic programmes</p>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>📍</div>
            <h3 className={styles.contactLabel}>Address</h3>
            <p className={styles.contactText}>
              Ajit Kumar Mehta Sanskrit Sikshan Sansthan<br />
              SINGHIYAHI LADAURA, WARD-06 (INDIA)<br />
              Umakant Nagar Ward-06, Ladaura<br />
              District: Samastipur, Bihar (INDIA)<br />
              Pin Code: 848302
            </p>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>📧</div>
            <h3 className={styles.contactLabel}>Email</h3>
            <p className={styles.contactText}>
              <a href="mailto:dk6153906@gmail.com" className={styles.contactLink}>dk6153906@gmail.com</a>
            </p>
            <div className={styles.contactIconSecond}>🏛️</div>
            <h3 className={styles.contactLabel}>Affiliation</h3>
            <p className={styles.contactText}>
              Central Sanskrit University, Delhi<br />
              Recognized by Government of India
            </p>
          </div>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>🗺️</div>
            <h3 className={styles.contactLabel}>Location</h3>
            <iframe
              title="School Location"
              src="https://maps.google.com/maps?q=Ladaura,Samastipur,Bihar&output=embed"
              className={styles.mapEmbed}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [floatingY, setFloatingY] = useState(0);

  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const t = (ts - start) / 1000;
      setFloatingY(Math.sin(t * 0.7) * 10);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroParticles}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={styles.particle} style={{
              left: `${(i * 37 + 7) % 100}%`,
              top: `${(i * 53 + 11) % 100}%`,
              animationDelay: `${(i * 0.4) % 4}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }} />
          ))}
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroLogoWrap} style={{ transform: `translateY(${floatingY}px)` }}>
            <img src="/images/logo.jpg" alt="AKMSSS Logo" className={styles.heroLogo} />
            <div className={styles.heroLogoRing} />
          </div>
          <div className={styles.heroSanskrit}>॥ विद्या विनयेन शोभते ॥</div>
          <h1 className={styles.heroTitle}>
            Ajit Kumar Mehta<br />
            <span className={styles.heroTitleAccent}>Sanskrit Sikshan Sansthan</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A Center of Sanskrit Excellence · Ladaura, Samastipur, Bihar
          </p>
          <div className={styles.heroBadgeRow}>
            <span className={styles.heroBadge}>Est. 1984</span>
            <span className={styles.heroBadge}>Reg. No. 311/1984-85</span>
            <span className={styles.heroBadge}>Central Sanskrit University Recognized</span>
          </div>
          <div className={styles.heroActions}>
            <a href="#courses" className={styles.heroCta}>Explore Courses</a>
            <a href="#contact" className={styles.heroCtaOutline}>Contact Us</a>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      <div className={styles.statsBar}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <section className={`${styles.section} ${styles.welcomeSection}`}>
        <div className={styles.sectionInner} style={{ opacity: 1, transform: 'none' }}>
          <div className={styles.welcomeGrid}>
            <div className={styles.welcomeText}>
              <div className={styles.sectionBadge}>Welcome</div>
              <h2 className={styles.sectionTitle}>Preserving the Sacred Tradition of Sanskrit</h2>
              <p className={styles.welcomeBody}>
                Founded in 1984, Ajit Kumar Mehta Sanskrit Sikshan Sansthan is a premier institution
                dedicated to the preservation, promotion, and propagation of Sanskrit language and
                Vedic knowledge. Affiliated with Central Sanskrit University, Delhi, and recognized
                by the Government of India, we offer a structured path of Sanskrit learning from
                foundational to post-graduate level.
              </p>
              <p className={styles.welcomeBody}>
                Located in the heart of Bihar, our institution has been a center of cultural and
                academic excellence, nurturing students in the timeless wisdom of Sanskrit Sahitya,
                Vyakarana, and Jyotish for over four decades.
              </p>
              <div className={styles.welcomeOrn}>❃ ❃ ❃</div>
            </div>
            <div className={styles.welcomeImageWrap}>
              <img src="/images/campus-2.jpg" alt="School Entrance" className={styles.welcomeImage} />
              <div className={styles.welcomeImageBorder} />
            </div>
          </div>
        </div>
      </section>

      <CoursesSection />
      <Shlokas />
      <SubjectsSection />
      <LeadershipSection />
      <StaffPreviewSection />
      <CampusTourSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
