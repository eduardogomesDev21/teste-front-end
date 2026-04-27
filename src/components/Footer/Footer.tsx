import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import styles from './Footer.module.scss';

const columns = [
  {
    title: 'Institucional',
    items: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    items: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    items: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <section className={styles.brand}>
          <a href="#" aria-label="Econverse">
            <span>ec</span>onverse
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <Instagram size={18} />
            <MessageCircle size={18} />
            <Linkedin size={18} />
          </div>
        </section>

        {columns.map((column) => (
          <section key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className={styles.copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </footer>
  );
}
