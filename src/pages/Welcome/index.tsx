import { NavButton } from 'src/components/NavButton'

import styles from './styles.module.scss'

export const Welcome = () => {
    return (
        <main className={styles.greetingsWrapper}>
            <div className={styles.title}>
                Привет! Хочешь узнать, совместимость по знаку зодиака?
            </div>
            <NavButton
                to='main'
                className='greetings'
                text='Да!'
            />
        </main>
    )
}