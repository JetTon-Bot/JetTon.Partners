import styles from '../hero/Hero.module.css';
import Image from 'next/image'
import coinImage from '../../../assets/img/coin-image.png'
import React from 'react'
import Button from '../../sharable/button/button';
import { useTranslation } from 'next-i18next'

const Hero = ({ handleModalOpen }) => {
    const image = (
        <Image
            src={coinImage}
            alt='Five coins'
        />
    )
    const { t } = useTranslation();

    return (
        <section id='hero'>
            <div className='container'>
                <div className={styles.hero}>
                    <div className={styles.hero__wrapper}>
                        <div className={styles.hero__left}>
                            <h1 className={styles.title}>
                                {t('hero.title')}
                            </h1>
                            <h2 className={styles.description}>
                                {t('hero.description')}
                            </h2>
                            <div className={styles.img__wrapper}>
                                {image}
                            </div>
                            <Button onClick={handleModalOpen}>
                                {t('hero.btn')}
                            </Button>
                        </div>
                        <div className={styles.hero__right}>
                            {image}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero