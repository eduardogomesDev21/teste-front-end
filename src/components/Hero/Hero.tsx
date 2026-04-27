import styles from './Hero.module.scss';

import heroBackground from '../../assets/banner-black-friday.png';

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Promoções">
      <img src={heroBackground} alt="" aria-hidden="true" />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>Venha conhecer nossas promoções</h1>
        <p>
          <strong>50% Off</strong> nos produtos
        </p>
        <button type="button">Ver produto</button>
      </div>
    </section>
  );
}
