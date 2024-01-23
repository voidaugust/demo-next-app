import styles from "@/styles/Header.module.css"
import Link from "next/link"

export default function Header() {
  
  return (
    <header className={styles.header}>
      <h1>Next Demo App</h1>
      <nav className={styles.nav}>
        <Link href="/" className={styles.home}>☯</Link>
        <br/><br/>
        <ul className={styles.navList}>
          <li><Link href="/users" className={styles.link}>/users</Link></li>
          <li><Link href="/users/5" className={styles.link}>/users/5</Link></li>
          <li><Link href="/posts" className={styles.link}>/posts</Link></li>
          <li><Link href="/posts/5" className={styles.link}>/posts/5</Link></li>
          <li><Link href="/users/5/posts" className={styles.link}>/users/5/posts</Link></li>
        </ul>
      </nav>
    </header>
  )
}