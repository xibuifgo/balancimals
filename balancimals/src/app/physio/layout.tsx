import styles from './layout.module.scss';
import Header from './components/header';
import Footer from './components/footer';

export default function PhysioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
}