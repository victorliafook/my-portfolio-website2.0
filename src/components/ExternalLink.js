import React from 'react';

const ExternalLink = ({ url, text }) => (
  <a href={url} target='_blank' rel="noopener noreferrer">{text}</a>
);

export default ExternalLink;