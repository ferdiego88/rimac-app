import React, { useState } from 'react';
import styles from './ASelect.module.scss';

const ASelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
        <select
          id="selectOption"
          value={selectedOption}
          onChange={handleSelectChange}
          className={`${styles.select}`}
        >
          <option value="dni">DNI</option>
          <option value="ce">CE</option>
          <option value="pass">PASS</option>
          <option value="otro">OTRO</option>
        </select>
  );
};

export default ASelect;
