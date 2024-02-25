import React, { useState } from 'react';
import styles from './AInput.module.scss';

interface IAInput {
  label: string;
  className?: string;
}
const AInput = ({
  label,
  className
  }: IAInput) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={`${styles['input__floating-label']}`}>
      <label className={`${styles.label} ${inputValue ? styles['label--active'] : ''}`}> {label} </label>
      <input
        type="text"
        className={`${styles.input} ${styles[className ?? '']}`}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default AInput;
