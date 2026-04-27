import { Minus, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <section className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
          <X size={20} />
        </button>

        <div className={styles.imageBox}>
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{product.productName}</h3>
          <strong className={styles.price}>{formatCurrency(product.price)}</strong>
          <p className={styles.description}>
            Many desktop publishing packages and web page editors now many desktop publishing
          </p>
          <a href="#" className={styles.link}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                <Minus size={16} />
              </button>
              <span>{quantity.toString().padStart(2, '0')}</span>
              <button
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
              >
                <Plus size={16} />
              </button>
            </div>
            <button type="button" className={styles.buyButton}>
              COMPRAR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
