import React from 'react';
import styles from './ContentRow.module.scss';

export interface ContentRowProps extends React.HTMLAttributes<HTMLElement> {
  rowTitle: string | React.ReactNode;
  rowContent: string | React.ReactNode;
}

export const ContentRow: React.FC<ContentRowProps> = ({ rowTitle, rowContent, className }: ContentRowProps) => {
  return (
    <div className={`${styles.contentRow} ${className}`}>
      <div>{rowTitle}</div>
      <div>{rowContent}</div>
    </div>
  );
};
