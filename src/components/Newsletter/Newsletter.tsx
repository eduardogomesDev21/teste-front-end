import styles from './Newsletter.module.scss';

export function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Assine e receba as melhores ofertas e novidades no seu e-mail.</p>
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <button type="submit">INSCREVER</button>
          <label>
            <input type="checkbox" defaultChecked />
            Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  );
}
