'use client'
import { useState } from 'react';
import styles from './ACheckbox.module.scss';

interface ICheckbox {
  className?: string;
  text: string;
}
const ACheckbox = ( {
className,
text,
}: ICheckbox) => {

    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
      setChecked(!isChecked);
    };

    return (
        <label className={styles['checkbox-container']}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={styles['checkmark']}></span>
        {text }
      </label>
    );
};

export default ACheckbox;