'use client'
import ALogo from '../../atoms/a-logo/ALogo';
import AText from '../../atoms/a-text/AText';
import styles from './MFooter.module.scss';

interface AFooter {
  text: string;
  className?: string;
}
const MFooter = ( {
text,
className
}: AFooter) => {

    return (
        <footer className={styles.footer}>
            <ALogo url='/assets/icons/logo-footer.svg' className='logo__footer' alt='Rimac'/>
            <hr className={styles['footer__hr']}></hr>
            <AText description='© 2023 RIMAC Seguros y Reaseguros.' className='text__copyright'/>
        </footer>
    );
};

export default MFooter;