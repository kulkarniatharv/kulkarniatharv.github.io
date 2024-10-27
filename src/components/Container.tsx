import React from 'react';
import * as styles from '../styles/container.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className = '', ...props }) => (
  <div className={`${styles['container']} ${className}`} {...props}>
    {children}
  </div>
)

export default Container
