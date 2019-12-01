import React from 'react';
import { ElementType } from '../../../definitions/data.interfaces';
import styles from './Badge.module.scss';

export interface IBadgeProps extends React.HTMLAttributes<HTMLElement> {
  type?: ElementType;
}

export const Badge: React.FC<IBadgeProps> = ({ type = 'negative', className = '', children }: IBadgeProps) => {
  return <div className={`${styles.badge} ${styles[type]} ${className}`}>{children}</div>;
};
