import React, { FC, HTMLAttributeReferrerPolicy } from 'react';
import { App } from '../../../../types';
import './Link.scss';

export interface INavLink {
    linkText: string;
    href: string;
    target?: App.supportedTargetTypes;
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    external?: boolean;
}

interface ILinkProps extends INavLink {
    download: boolean;
    mailto: boolean;
    tel: boolean;
    color: string;
}

const Link: FC<ILinkProps> = (props) => {
    const {
        download,
        href,
        mailto,
        tel,
        target,
        referrerPolicy,
        color,
        linkText,
    } = props;
    return (
        <a
            download={download}
            href={mailto ? 'mailto: ' + href : tel ? 'tel:' + href : href}
            target={target}
            referrerPolicy={referrerPolicy}
            className={'link' + ' link--' + color}
        >
            {linkText}
        </a>
    );
};

export default Link;
