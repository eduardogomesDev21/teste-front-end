import {
  BadgePercent,
  Crown,
  Heart,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserCircle2,
} from 'lucide-react';
import styles from './Header.module.scss';

const mainMenu = [
  'Todas categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
  'Assinatura',
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topInfo}>
        <p>
          <ShieldCheck size={14} />
          Compra <strong>100% segura</strong>
        </p>
        <p>
          <Truck size={14} />
          <strong>Frete grátis</strong> acima de R$ 200
        </p>
        <p>
          <BadgePercent size={14} />
          <strong>Parcele</strong> suas compras
        </p>
      </div>

      <div className={styles.mainBar}>
        <a href="#" aria-label="Econverse" className={styles.logo}>
          <span>ec</span>onverse
        </a>

        <form className={styles.search} role="search">
          <input type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar">
            <Search size={21} />
          </button>
        </form>

        <div className={styles.actions}>
          <button type="button" aria-label="Pedidos">
            <ShoppingCart size={23} />
          </button>
          <button type="button" aria-label="Favoritos">
            <Heart size={23} />
          </button>
          <button type="button" aria-label="Conta">
            <UserCircle2 size={23} />
          </button>
          <button type="button" aria-label="Carrinho">
            <ShoppingCart size={23} />
          </button>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Categorias principais">
        {mainMenu.map((item) => (
          <a
            key={item}
            href="#"
            className={item === 'Ofertas do dia' ? styles.activeItem : ''}
          >
            {item === 'Assinatura' && <Crown size={14} />}
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
