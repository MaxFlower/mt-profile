import React from 'react';
import { ElementColorType } from '../../definitions/data.interfaces';
import styles from './Badge.module.scss';

interface BadgeProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'children' | 'className'> {
  colorType?: ElementColorType;
}

const Badge: React.FC<BadgeProps> = ({ colorType = 'negative', className = '', children }) => {
  return <div className={`${styles.badge} ${styles[colorType]} ${className}`}>{children}</div>;
};

export default React.memo(Badge);
