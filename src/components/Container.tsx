import React from 'react';
import styles from '../styles/container.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className = '', ...props }) => {
  const containerClass = [styles?.container, className].filter(Boolean).join(' ');
  
  return (
    <div className={containerClass} {...props}>
      {children}
    </div>
  );
};

export default Container;
