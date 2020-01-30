import React, { useMemo } from 'react';
import { ElementType } from '../../../definitions/data.interfaces';
import styles from './MediaCard.module.scss';

export interface MediaCardProps extends React.HTMLAttributes<HTMLElement> {
  type?: ElementType;
  bgUrl?: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({ type = 'positive', className = '', bgUrl }: MediaCardProps) => {
  return useMemo(
    () => (
      <div
        className={`${styles.mediaCard} ${styles[type]} ${className}`}
        style={{
          backgroundImage: `url('${bgUrl}')`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
    ),
    [type, className, bgUrl]
  );
};
