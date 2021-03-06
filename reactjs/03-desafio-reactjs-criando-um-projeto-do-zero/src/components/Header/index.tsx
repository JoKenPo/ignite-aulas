import styles from './header.module.scss'
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href={'/'}>
          <img src="/images/logo_spacetravelling.svg" alt="logo" />
        </Link>
      </div>
    </header>
  )
}
