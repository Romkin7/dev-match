import React, { FC } from 'react';
import List from '../List/List';
import { navLinks } from './navLinks';

const NavBar: FC = () => {
    return (
        <nav className="nav">
            <List navLinks={navLinks} />
        </nav>
    );
};

export default NavBar;
