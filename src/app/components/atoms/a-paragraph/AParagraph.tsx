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
        <div>
        <hr className={`${ !showLine ? styles['hidden'] : ''}`} />
        <p className={`${styles.paragraph} ${styles[className ?? '']}`}>
          {description}  
        </p>
        </div>

    );
};

export default AParagraph;