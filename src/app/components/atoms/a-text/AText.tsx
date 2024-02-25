'use client'
import styles from './AText.module.scss';

interface IText {
  description: string;
  className?: string;
}
const AText = ( {
description,
className
}: IText) => {

    return (
        <p className={`${styles.text} ${styles[className ?? '']}`}>
          {description}  
        </p>
    );
};

export default AText;