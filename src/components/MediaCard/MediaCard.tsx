import React from 'react';
import { ElementColorType } from '../../definitions/data.interfaces';
import styles from './MediaCard.module.scss';

interface MediaCardProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  colorType?: ElementColorType;
  bgUrl?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ colorType = 'positive', className = '', bgUrl }) => {
  return (
    <div
      className={`${styles.mediaCard} ${styles[colorType]} ${className}`}
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default React.memo(MediaCard);
