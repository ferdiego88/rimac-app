'use client'
import styles from './MBanner.module.scss';
import AText from '../../atoms/a-text/AText';
import AImage from '../../atoms/a-image/AImage';

interface IMBanner {
  className?: string;
}
const MBanner = ( {
className,
}:IMBanner ) => {
 

    return (
       <section className={`${styles.banner} ${className ?? ''}`}>
            <div className={`${styles['banner__text-container']}`}>
            <AText description='Seguro Salud Flexible' className={'text__banner-highlighted'}/>
            <AText description='Creado para ti y tu familia' className={'text__banner-principal'}/>
            </div>
            <AImage url='/assets/images/welcome.png' className={'image__banner'} alt='Familia' />
       </section>
    );
};

export default MBanner;