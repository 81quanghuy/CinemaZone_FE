import { FC, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export declare const Button: FC<ButtonProps>;
export declare const Modal: FC<ModalProps>;
export declare const Loader: FC<LoaderProps>;