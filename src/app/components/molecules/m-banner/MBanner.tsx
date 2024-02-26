'use client'
import styles from './MBanner.module.scss';
import AImage from '../../atoms/a-image/AImage';

interface IMBanner {
  className?: string;
}
const MBanner = ( {
className,
}:IMBanner ) => {
 

    return (
       <section className={`${styles.banner} ${className ?? ''}`}>
            <AImage url='/assets/images/welcome.png' className={'image__banner'} alt='Familia' />
       </section>
    );
};

export default MBanner;