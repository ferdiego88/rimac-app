'use client'
import MHeader from '../../molecules/m-header/MHeader';
import MBanner from '../../molecules/m-banner/MBanner';
import OFormWelcome from '../../organisms/o-form-welcome/OFormWelcome';
import AParagraph from '../../atoms/a-paragraph/AParagraph';
import styles from './TWelcome.module.scss';
import MFooter from '../../molecules/m-footer/MFooter';

interface Welcome {

}
const Welcome = ( {

}) => {

    return (
        <>
        <img src={'assets/images/blur-asset-left-mobile.png'} 
        alt='blur-left-mobile'
        className={styles['welcome__image-blur-left']} />

        <img src={'assets/images/blur-asset-right-mobile.png'} 
        alt='blur-right-mobile'
        className={styles['welcome__image-blur-right']} />

        <MHeader></MHeader>
        <main className={styles.welcome}>
        <MBanner></MBanner>
        <AParagraph 
        description='Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.'
        showLine={true}/>
        <OFormWelcome></OFormWelcome>
       </main>
        <MFooter text='© 2023 RIMAC Seguros y Reaseguros.'></MFooter>
        </>
    );
};

export default Welcome;