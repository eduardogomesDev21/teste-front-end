import styles from './PartnerBanners.module.scss';

import partnerImage from '../../assets/parceiros.png';

export function PartnerBanners() {
  return (
    <section className={styles.section} aria-label="Parceiros">
      {[1, 2].map((item) => (
        <article key={item} className={styles.card}>
          <img src={partnerImage} alt="Parceiros" />
          <div className={styles.content}>
            <button type="button" className={styles.ghostButton}>CONFIRA</button>
          </div>
        </article>
      ))}
    </section>
  );
}
