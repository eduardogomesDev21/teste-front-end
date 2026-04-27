import {
  Beef,
  Dumbbell,
  HandHeart,
  MonitorSmartphone,
  Shirt,
  Store,
  Wrench,
} from 'lucide-react';
import styles from './CategoryStrip.module.scss';

const categories = [
  { name: 'Tecnologia', icon: MonitorSmartphone, active: true },
  { name: 'Supermercado', icon: Store },
  { name: 'Bebidas', icon: Beef },
  { name: 'Ferramentas', icon: Wrench },
  { name: 'Saúde', icon: HandHeart },
  { name: 'Esportes e Fitness', icon: Dumbbell },
  { name: 'Moda', icon: Shirt },
];

export function CategoryStrip() {
  return (
    <section className={styles.strip} aria-label="Categorias em destaque">
      <div className={styles.inner}>
        {categories.map(({ name, icon: Icon, active }) => (
          <button
            key={name}
            type="button"
            className={`${styles.item} ${active ? styles.active : ''}`}
          >
            <span>
              <Icon size={42} />
            </span>
            <small>{name}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
