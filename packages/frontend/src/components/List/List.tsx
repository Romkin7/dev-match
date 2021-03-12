import React, { FC } from 'react';
import { INavLink } from '../Link/Link';
import './List.scss';
import '../NavBar/NavBar.scss';
import ListItem from './ListItem/ListItem';

interface IListProps {
    navLinks?: INavLink[];
}

const List: FC<IListProps> = (props) => {
    const { navLinks } = props;
    return (
        <ul className={navLinks ? 'list nav-menu' : 'list'}>
            {navLinks?.length &&
                navLinks.map((navLink: INavLink) => {
                    return <ListItem key={navLink.href} navLink={navLink} />;
                })}
        </ul>
    );
};

export default List;
