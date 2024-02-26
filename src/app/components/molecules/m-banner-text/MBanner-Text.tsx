'use client'
import styles from './MBanner.module.scss';
import AText from '../../atoms/a-text/AText';

interface IMBannerText {
  className?: string;
  title: string;
  subtitle: string
}
const MBannerText = ( {
className,
title,
subtitle,
}:IMBannerText ) => {
 

    return (
       <section className={`${styles['banner-text']} ${className ?? ''}`}>
            <div className={`${styles['banner-text__container']}`}>
            <AText description={title} className={'text__banner-highlighted'}/>
            <AText description={subtitle} className={'text__banner-principal'}/>
            </div>
       </section>
    );
};

export default MBannerText;