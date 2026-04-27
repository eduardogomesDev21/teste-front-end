import React from 'react';
import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const originalPrice = product.price * 1.12;
  const installmentsValue = product.price / 2;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.photo} alt={`Imagem do produto ${product.productName}`} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.description}>
          {product.descriptionShort}
        </h3>

        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>
            {formatCurrency(originalPrice)}
          </span>
          <span className={styles.currentPrice}>
            {formatCurrency(product.price)}
          </span>
          <span className={styles.installments}>
            ou 2x de {formatCurrency(installmentsValue)} sem juros
          </span>
        </div>

        <span className={styles.freeShipping}>Frete grátis</span>
      </div>

      <button
        className={styles.buyButton}
        type="button"
        onClick={() => onClick(product)}
      >
        COMPRAR
      </button>
    </article>
  );
};
