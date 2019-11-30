import React from 'react';
import styles from './Badge.module.scss';

export type BadgeType = 'primary' | 'warning' | 'error';

export interface IBadgeProps extends React.HTMLAttributes<HTMLElement> {
  type: BadgeType;
}

export const Badge: React.FC<IBadgeProps> = ({ type = 'primary', className = '', children }: IBadgeProps) => {
  return <div className={`${styles.badge} ${styles[type]} ${className}`}>{children}</div>;
};
