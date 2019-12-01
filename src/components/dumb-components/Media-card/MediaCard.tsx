import React from 'react';
import { ElementType } from '../../../definitions/data.interfaces';
import styles from './MediaCard.module.scss';

export interface IMediaCardProps extends React.HTMLAttributes<HTMLElement> {
  type?: ElementType;
  bgUrl?: string;
}

export const MediaCard: React.FC<IMediaCardProps> = ({ type = 'positive', className = '', bgUrl }: IMediaCardProps) => {
  const inlineStyle = {
    backgroundImage: `url('${bgUrl}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return <div className={`${styles.mediaCard} ${styles[type]} ${className}`} style={inlineStyle} />;
};
