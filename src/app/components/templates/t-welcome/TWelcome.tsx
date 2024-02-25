'use client'
import MHeader from '../../molecules/m-header/MHeader';
import MBanner from '../../molecules/m-banner/MBanner';
import OFormWelcome from '../../organisms/o-form-welcome/OFormWelcome';
import AParagraph from '../../atoms/a-paragraph/AParagraph';

interface Welcome {

}
const Welcome = ( {

}) => {

    return (
       <main>
        <MHeader></MHeader>
        <MBanner></MBanner>
        <AParagraph 
        description='Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría, 100% online.'
        showLine={true}/>
        <OFormWelcome></OFormWelcome>
       </main>
    );
};

export default Welcome;