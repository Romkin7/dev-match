import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { INavLink } from '../../Link/Link';

interface IListItemProps {
    navLink?: INavLink;
}

const ListItem: FC<IListItemProps> = (props) => {
    const { navLink } = props;
    return (
        <li>
            {navLink?.external ? (
                <a href={navLink.href}>{navLink.linkText}</a>
            ) : (
                <Link to={navLink?.href as string}>{navLink?.linkText}</Link>
            )}
        </li>
    );
};

export default ListItem;
