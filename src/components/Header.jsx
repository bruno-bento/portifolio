import styles from './Header.module.css'
import React, { useState } from 'react';
import Curriculum from '../assets/BrunoBento_CV.pdf'

function Header({ setShowDefaultDescription }) {
    const [downloading, setDownloading] = useState(false);


    function handleDefaultDescription() {
        setShowDefaultDescription(true)
    }
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <p onClick={handleDefaultDescription} ><span>Bruno</span> Bento</p>
                <a href={Curriculum} download="BrunoBento_CV" target='_blank' className={styles.btn}>
                    Currículo
                </a>
            </nav>
        </header>
    )
}

export default Header