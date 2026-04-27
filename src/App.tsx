import { useEffect, useMemo, useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { CategoryStrip } from './components/CategoryStrip/CategoryStrip';
import { ProductSection } from './components/ProductSection/ProductSection';
import { ProductModal } from './components/ProductModal/ProductModal';
import { PartnerBanners } from './components/PartnerBanners/PartnerBanners';
import { BrandStrip } from './components/BrandStrip/BrandStrip';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';
import { Product } from './types/Product';
import { getProducts } from './services/api'; // ✅ IMPORTANTE
import styles from './App.module.scss';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        const data = await getProducts();
        setProducts(data);
        // Abre o modal automaticamente com o primeiro produto assim que carregar
        if (data && data.length > 0) {
          setSelectedProduct(data[0]);
        }
      } catch (err) {
        console.error(err); // só log, sem quebrar UI
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const showcase = useMemo(() => products.slice(0, 8), [products]);

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <CategoryStrip />

        {isLoading && <p className={styles.feedback}>Carregando produtos...</p>}

        {!isLoading && (
          <>
            <ProductSection
              title="Produtos relacionados"
              products={showcase}
              onProductClick={setSelectedProduct}
            />
            <PartnerBanners />
            <ProductSection
              title="Produtos relacionados"
              subtitle="Ver todos"
              products={showcase}
              onProductClick={setSelectedProduct}
            />
            <PartnerBanners />
            <BrandStrip />
            <ProductSection
              title="Produtos relacionados"
              subtitle="Ver todos"
              products={showcase}
              onProductClick={setSelectedProduct}
            />
          </>
        )}
      </main>
      <Newsletter />
      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}