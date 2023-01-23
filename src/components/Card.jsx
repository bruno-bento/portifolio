import styles from './Card.module.css'


function Card({ name, description, github, website }) {
    return (
        <div className={styles.card}>
            <h1>{name}</h1>
            <p>
                {description}
            </p>

            <div className={styles.card_links}>
                {github && (<a href={github}>Github</a>)}
                {website && (<a href={website}>WebSite</a>)}
            </div>
        </div>
    )
}

export default Card