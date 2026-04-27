import styles from './BrandStrip.module.scss';

export function BrandStrip() {
  return (
    <section className={styles.section}>
      <h2>Navegue por marcas</h2>
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5].map((item) => (
          <article key={item} className={styles.brand}>
            <div><span>ec</span>onverse</div>
          </article>
        ))}
      </div>
    </section>
  );
}
