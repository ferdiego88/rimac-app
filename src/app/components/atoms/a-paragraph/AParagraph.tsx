'use client'
import styles from './AParagraph.module.scss';

interface IAParagraph {
  description: string;
  className?: string;
  showLine: boolean;
}
const AParagraph = ( {
description,
className,
showLine
}: IAParagraph) => {
    console.log(showLine);
    return (
        <div className={`${styles.paragraph}`}>
        <hr className={`${styles['paragraph__hr']} ${styles[className ?? '']}`} />
        <p className={`${styles['paragraph__text']} ${styles[className ?? '']}`}>
          {description}  
        </p>
        </div>

    );
};

export default AParagraph;