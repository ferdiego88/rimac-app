'use client'
import { forwardRef, Ref, memo } from 'react';

import Ripple from '../ripple';

import styles from './Abutton.module.scss';

interface IProps {
  name: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  noRipple?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  text?: boolean;
  subtext?: boolean;
  toggled?: boolean;
  theme?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'tertiary'
    | 'quaternary'
    | 'primary-white'
    | 'secondary-selected';
  align?: 'center' | 'left' | 'right' | null;
  children?: React.ReactNode;
  tabIndex?: number;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
}

/**
 * Button Component
 */
const AButton = (
  {
    name,
    className,
    leading,
    trailing,
    disabled,
    type = 'button',
    ghost,
    text,
    subtext,
    toggled,
    theme = 'primary',
    tabIndex = 0,
    align = 'center',
    children,
    onClick,
    noRipple,
    onFocus,
    onBlur,
  }: IProps,
  ref: Ref<HTMLButtonElement>,
) => {
  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.code === 'Enter' || e.code === 'Space' || e.code === undefined) {
      if (e && e.code !== 'Space') e.preventDefault();
    }
  };

  return (
    <button
      name={name}
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      tabIndex={tabIndex}
      onKeyUp={handleKey}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      className={`${styles.button} ${className ?? ''}`}
      // Custom attributes
      data-theme={theme}
      data-align={align}
      data-ghost={ghost ? '' : undefined}
      data-text={text ? '' : undefined}
      data-subtext={subtext ? '' : undefined}
      data-toggled={toggled ? '' : undefined}
    >
      {leading && <span className={styles.leading}>{leading}</span>}
      {children}
      {trailing && <span className={styles.trailing}>{trailing}</span>}
      {!noRipple && !disabled && !text && <Ripple />}
    </button>
  );
};

export default memo(forwardRef(AButton));
