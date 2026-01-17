import React from 'react';
import { IconProps } from '../types';

interface IconBaseProps extends IconProps {
    children: React.ReactNode;
}

export const IconBase: React.FC<IconBaseProps> = ({
    size = '1em',
    color = 'currentColor',
    title,
    children,
    ...props
}) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={{ color }}
        {...props}
    >
        {title && <title>{title}</title>}
        {children}
    </svg>
);
