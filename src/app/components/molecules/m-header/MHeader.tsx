'use client'
import styles from './MHeader.module.scss';
import ALogo from '../../atoms/a-logo/ALogo';
import AText from '../../atoms/a-text/AText';

interface MHeader {
  className?: string;
}
const MHeader = ( {
className,
}:MHeader ) => {
 
    const textHeaderDescription = '(01) 411 6001'
    return (
       <header className={`${styles.header} ${className ?? ''}`}>
            <div className={`${styles['header__logo']}`}>
            <ALogo url='/assets/icons/logo.svg' alt='Rimac'/>
            </div>
            <div className={`${styles.header} ${styles['header__phone-container']}`}>
            <ALogo url='/assets/icons/phone.svg' alt='Rimac'/>
            <AText description={textHeaderDescription} className={'text__header'}></AText>
            </div>

       </header>
    );
};

export default MHeader;