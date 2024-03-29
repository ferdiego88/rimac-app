'use client'
import MHeader from '../../molecules/m-header/MHeader';
import MBanner from '../../molecules/m-banner/MBanner';
import OFormWelcome from '../../organisms/o-form-welcome/OFormWelcome';
import AParagraph from '../../atoms/a-paragraph/AParagraph';
import styles from './TWelcome.module.scss';
import MFooter from '../../molecules/m-footer/MFooter';
import MBannerText from '../../molecules/m-banner-text/MBanner-Text';

interface Welcome {

}
const Welcome = ( {

}) => {

    return (
        <>
        <img src={'assets/images/blur-asset-left-mobile.png'} 
        alt='blur-left-mobile'
        className={`${styles['welcome__blur-left']} ${styles['welcome__blur-left-mobile']}`} />

        <img src={'assets/images/blur-asset-right-mobile.png'} 
        alt='blur-right-mobile'
        className={`${styles['welcome__blur-right']} ${styles['welcome__blur-right-mobile']}`} />

        <img src={'assets/images/blur-asset-left-desktop.png'} 
        alt='blur-left-mobile'
        className={`${styles['welcome__blur-left']} ${styles['welcome__blur-left-desktop']}`} />

        <img src={'assets/images/blur-asset-right-desktop.png'} 
        alt='blur-right-mobile'
        className={`${styles['welcome__blur-right']} ${styles['welcome__blur-right-desktop']}`} />

        <MHeader></MHeader>
        <main className={styles.welcome}>
        <MBannerText className={'banner-text__container'} title={'Seguro Salud Flexible'} subtitle={'Creado para ti y tu familia'}></MBannerText>
        <MBanner></MBanner>
        <AParagraph 
        description='Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.'
        showLine={true} className={'paragraph'}/>
        <OFormWelcome></OFormWelcome>
       </main>
        <MFooter text='© 2023 RIMAC Seguros y Reaseguros.'></MFooter>
        </>
    );
};

export default Welcome;