import styles from './Header.module.css'

function Header({setShowDefaultDescription}) {
    function handleDefaultDescription() {
        setShowDefaultDescription(true)
    }
    return (
        <header className={styles.header}>
            <nav>
                <p onClick={handleDefaultDescription} ><span>Bruno</span> Bento</p>
            </nav>
        </header>
    )
}

export default Header