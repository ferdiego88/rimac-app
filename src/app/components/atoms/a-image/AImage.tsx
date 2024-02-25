'use client'
import styles from './AImage.module.scss';

interface IImage {
  url: string;
  alt: string;
  className?: string;
}
const AImage = ( {
url,
alt,
className
}: IImage) => {

    return (
        <img 
        src={url} 
        alt={alt}
        className={`${styles.image} ${styles[className ?? '']}`} />
    );
};

export default AImage;