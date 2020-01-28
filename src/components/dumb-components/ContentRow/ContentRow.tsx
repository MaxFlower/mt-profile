import React, { useMemo } from 'react';
import styles from './ContentRow.module.scss';

export interface ContentRowProps extends Pick<React.HTMLAttributes<HTMLElement>, 'id' | 'className'> {
  rowTitle: React.ReactNode;
  rowContent: React.ReactNode;
}

export const ContentRow: React.FC<ContentRowProps> = ({ rowTitle, rowContent, className = '' }: ContentRowProps) => {
  return useMemo(
    () => (
      <div className={`${styles.contentRow} ${className}`}>
        <div>{rowTitle}:</div>
        <div>{rowContent}</div>
      </div>
    ),
    [rowTitle, rowContent, className]
  );
};
