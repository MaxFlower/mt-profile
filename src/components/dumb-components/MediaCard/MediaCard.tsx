import React from 'react';
import { ElementType } from '../../../definitions/data.interfaces';
import styles from './MediaCard.module.scss';

export interface MediaCardProps extends React.HTMLAttributes<HTMLElement> {
  type?: ElementType;
  bgUrl?: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({ type = 'positive', className = '', bgUrl }: MediaCardProps) => {
  const inlineStyle = {
    backgroundImage: `url('${bgUrl}')`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };
  return <div className={`${styles.mediaCard} ${styles[type]} ${className}`} style={inlineStyle} />;
};
