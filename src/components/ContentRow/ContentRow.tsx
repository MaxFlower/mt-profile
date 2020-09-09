import React from 'react';
import styles from './ContentRow.module.scss';

interface ContentRowProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'id' | 'className'> {
  rowTitle: React.ReactNode;
  rowContent: React.ReactNode;
}

const ContentRow: React.FC<ContentRowProps> = ({ rowTitle, rowContent, className = '' }) => {
  return (
    <div className={`${styles.contentRow} ${className}`}>
      <div>{rowTitle}:</div>
      <div>{rowContent}</div>
    </div>
  );
};

export default React.memo(ContentRow);
