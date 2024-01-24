import styles from "@/styles/Card.module.css"

export default function Card({ children }) {
  return (
    <li className={styles.card}>
      {children}
    </li>
  )
}