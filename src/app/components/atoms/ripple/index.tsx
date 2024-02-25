'use client'

import { useEffect, useRef, useCallback, memo } from 'react';

import styles from './styles.module.scss';

type TProps = {
  color?: string;
  disabled?: boolean;
  duration?: number;
  onEnter?: boolean;
  onSpace?: boolean;
};

/**
 * Ripple Component
 */
const Ripple = ({
  color = '#0000004F',
  disabled,
  duration = 500,
  onEnter = true,
  onSpace,
}: TProps) => {
  const ref = useRef<HTMLElement>(null);

  const effect = useCallback(
    (e: any) => {
      // Only trigger effect when press Enter key, Mouse event
      if (
        !disabled &&
        ((onEnter && e?.keyCode === 13) ||
          (onSpace && e?.keyCode === 32) ||
          e?.keyCode === undefined)
      ) {
        // Get <span .../> element
        const ripple = ref.current?.getBoundingClientRect();

        if (ripple) {
          // Calculate wave position
          const x = e?.keyCode === undefined ? `${e.clientX - ripple.x - 1}px` : '50%';
          const y = e?.keyCode === undefined ? `${e.clientY - ripple.y - 1}px` : '50%';

          // Calculate wave size
          const size = ripple.width > ripple.height ? ripple.width : ripple.height;

          // Create wave element
          const wave = document.createElement('div');
          wave.setAttribute('data-testid', 'ripple-wave');
          wave.setAttribute('style', `left: ${x}; top: ${y}; background: ${color};`);
          wave.animate(
            [
              { transform: 'scale(1)', opacity: '1' },
              { transform: `scale(${size})`, opacity: '0' },
            ],
            { duration },
          );
          ref.current?.appendChild(wave);

          // Delete wave element after finished animation
          setTimeout(() => ref.current?.removeChild(wave), duration);
        }
      }
    },
    [color, disabled, duration, onEnter, onSpace],
  );

  // const trigger = (force = false) => effect(null, force);

  useEffect(() => {
    // Get parent element
    const parentElement = ref.current?.parentElement;

    // Add events if parent exist
    if (parentElement && !disabled) {
      // Set requirement parent styles
      parentElement.style.position = 'relative';
      parentElement.style.overflow = 'hidden';

      // Mouse or key event to trigger effect from parent element
      if (onEnter || onSpace) parentElement.addEventListener('keydown', effect);
      parentElement.addEventListener('mousedown', effect);

      // Delete event listener when component will unmount
      return () => {
        if (onEnter || onSpace) parentElement.removeEventListener('keydown', effect);
        parentElement.removeEventListener('mousedown', effect);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effect]);

  return <span data-testid="ripple" ref={ref} className={styles.ripple} />;
};

export default memo(Ripple);
