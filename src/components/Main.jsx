import styles from './Main.module.css'
import { useState } from 'react'
import Card from './Card'

function Main({ projects, showDefaultDescription, setShowDefaultDescription }) {
    const [currentProject, setCurrentProject] = useState(projects[0])
    function changeProject(id) {
        setShowDefaultDescription(false)
        setCurrentProject(projects.find((project) => project.id === id))
    }

    return (
        <main className={styles.main}>
            <div className={styles.main_content}>
                {
                    showDefaultDescription ? (
                        <Card name={projects[0].name} description={projects[0].description} />
                    )
                    : (
                        <Card 
                            name={currentProject.name} 
                            description={currentProject.description} 
                            github={currentProject.github} 
                            website={currentProject.website}
                        />
                    )
                }
            </div>
            <div className={styles.filter}>
                <h3>Projetos</h3>
                <ul>
                    {
                        projects.slice(1).map((project) => (
                            <li className={currentProject.id === project.id & !showDefaultDescription ? styles.active : ''} key={project.id} onClick={e => changeProject(e.target.value)} value={project.id}>
                                {project.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </main>
    )
}

export default Main