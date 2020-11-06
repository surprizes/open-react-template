import React from 'react';
import classNames from 'classnames';
import {TwitterIcon, MediumIcon, DiscordIcon} from "./../../elements/Icons"

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
      <li>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
          <MediumIcon />
          </a>
        </li>
        <li>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
          <DiscordIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;