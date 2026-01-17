import React from 'react';
import { IconBase } from '../IconBase';
import { IconProps } from '../../types';

export const Home: React.FC<IconProps> = (props) => (
    <IconBase {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </IconBase>
);
