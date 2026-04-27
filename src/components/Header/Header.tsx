import {
  BadgePercent,
  Crown,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserCircle2,
} from 'lucide-react';
import logo from '../../assets/logo.png';
import pedidosIcon from '../../assets/pedidos.svg';
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
          <img src={logo} alt="Econverse" className={styles.logoImage} />
        </a>

        <form className={styles.search} role="search">
          <input type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Buscar">
            <Search size={21} />
          </button>
        </form>

        <div className={styles.actions}>
          <button type="button" aria-label="Pedidos">
            <img src={pedidosIcon} alt="Meus Pedidos" width={23} height={23} />
          </button>
          <button type="button" aria-label="Perfil">
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
