import React from 'react';
import { ElementType } from '../../../definitions/data.interfaces';
import styles from './Badge.module.scss';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  type?: ElementType;
}

export const Badge: React.FC<BadgeProps> = ({ type = 'negative', className = '', children }: BadgeProps) => {
  return <div className={`${styles.badge} ${styles[type]} ${className}`}>{children}</div>;
};
