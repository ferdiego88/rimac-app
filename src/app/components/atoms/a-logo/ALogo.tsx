'use client'
import { forwardRef, Ref, memo } from 'react';
import styles from './ALogo.module.scss';

interface ILogo {
  url: string;
  alt: string;
  className?: string;
}
const ALogo = ( {
url,
alt,
className
}: ILogo) => {

    return (
        <img 
        src={url} 
        alt={alt}
        className={`${styles.logo} ${className ?? ''}`} />
    );
};

export default ALogo;