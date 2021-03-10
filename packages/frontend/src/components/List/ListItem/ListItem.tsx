import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { INavLink } from '../../Link/Link';
import { navLinks } from '../../NavBar/navLinks';

interface IListItemProps {
    navLink?: INavLink;
}

const ListItem: FC<IListItemProps> = (props) => {
    const { navLink } = props;
    return (
        <li className={navLink ? 'list-item nav-menu--item' : 'list-item'}>
            {navLink?.external ? (
                <a
                    className={
                        navLink
                            ? 'list-item--link nav-menu--item---link'
                            : 'list-item--link'
                    }
                    href={navLink.href}
                >
                    {navLink.linkText}
                </a>
            ) : (
                <Link
                    className={
                        navLink
                            ? 'list-item--link nav-menu--item---link'
                            : 'list-item--link'
                    }
                    to={navLink?.href as string}
                >
                    {navLink?.linkText}
                </Link>
            )}
        </li>
    );
};

export default ListItem;
