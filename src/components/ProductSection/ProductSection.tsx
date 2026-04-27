import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductSection.module.scss';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}

const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

export function ProductSection({
  title,
  subtitle,
  products,
  onProductClick,
}: ProductSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.titleArea}>
        <span className={styles.line} />
        <div>
          <h2>{title}</h2>
          {subtitle && <small>{subtitle}</small>}
        </div>
        <span className={styles.line} />
      </div>

      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <button key={tab} type="button" className={index === 0 ? styles.activeTab : ''}>
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.carouselShell}>
        <button type="button" className={styles.navButton} aria-label="Anterior">
          <ChevronLeft size={22} />
        </button>
        <div className={styles.cards}>
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={`${product.productName}-${product.price}`}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>
        <button type="button" className={styles.navButton} aria-label="Próximo">
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
