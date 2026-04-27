import styles from './CategoryStrip.module.scss';

// Import SVG icons from assets
import tecnologiaIcon from '../../assets/tecnologia_icon.svg';
import supermercadoIcon from '../../assets/supermercados_icon.svg';
import bebidasIcon from '../../assets/bebidas_icon.svg';
import ferramentasIcon from '../../assets/ferramentas_icon.svg';
import saudeIcon from '../../assets/saude_icon.svg';
import esportesIcon from '../../assets/esporte_icon.svg';
import modaIcon from '../../assets/moda_icon.svg';

const categories = [
  { name: 'Tecnologia', icon: tecnologiaIcon, active: true },
  { name: 'Supermercado', icon: supermercadoIcon },
  { name: 'Bebidas', icon: bebidasIcon },
  { name: 'Ferramentas', icon: ferramentasIcon },
  { name: 'Saúde', icon: saudeIcon },
  { name: 'Esportes e Fitness', icon: esportesIcon },
  { name: 'Moda', icon: modaIcon },
];

export function CategoryStrip() {
  return (
    <section className={styles.strip} aria-label="Categorias em destaque">
      <div className={styles.inner}>
        {categories.map(({ name, icon, active }) => (
          <button
            key={name}
            type="button"
            className={`${styles.item} ${active ? styles.active : ''}`}
          >
            <span className={styles.iconContainer}>
              <img src={icon} alt={name} />
            </span>
            <small>{name}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
