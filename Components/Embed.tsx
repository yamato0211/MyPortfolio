import Link from "next/link"
import styles from "../styles/hero.module.scss"

export default function Embed() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <h1 className={styles['hero-title']}>
                Hi, my name is <span className="text-color-main">Yamato</span>
                <br />
                I&apos;m the Web Developer.
                </h1>
                <p className={styles['hero-cta']}>
                    <Link href="/about" className={styles.button1}>
                        Know more
                    </Link>
                    <Link href="/blog" className={styles.button2}>
                        Show Blogs
                    </Link>
                </p>
            </div>
        </section>
    )
}