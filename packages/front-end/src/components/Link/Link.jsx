import React from 'react';
import './Link.scss';

const Link = (props) => {
    const { download, href, mailto, tel, target, referrerpolicy, color, linkText} = props;
    return (
        <a download={download} href={mailto ? "mailto: "+href : tel ? "tel:"+href : href} target={target} referrerPolicy={referrerpolicy} className={"link" + " link--"+color}>{linkText}</a>
    ) 
}

export default Link;