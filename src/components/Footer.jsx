import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react'
import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.ul_list}>
                <li>
                    <a href="mailto:brunoreinoso10@gmail.com">
                        <Envelope />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/bruno-bento">
                        <GithubLogo />
                    </a>
                </li>
                <li>
                    <a href="https://br.linkedin.com/in/bruno-bento-reinoso">
                        <LinkedinLogo />
                    </a>
                </li>
            </ul>

            <p>@ {new Date().getFullYear()} brunob.com.br</p>
        </footer>
    )
}

export default Footer