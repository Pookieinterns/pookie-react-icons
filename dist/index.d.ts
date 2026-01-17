import React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
}

declare const Home: React.FC<IconProps>;

declare const Search: React.FC<IconProps>;

declare const User: React.FC<IconProps>;

declare const Github: React.FC<IconProps>;

declare const Twitter: React.FC<IconProps>;

interface IconBaseProps extends IconProps {
    children: React.ReactNode;
}
declare const IconBase: React.FC<IconBaseProps>;

export { Github, Home, IconBase, Search, Twitter, User };
export type { IconProps };
