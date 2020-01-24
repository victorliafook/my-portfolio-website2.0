import React from 'react';
import { Breadcrumb } from  'react-bootstrap';

const NavBreadcrumbs = ({ hierarchyList }) => (
  <Breadcrumb>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    {hierarchyList.map((item, key) => (
      <Breadcrumb.Item 
        key={key}
        href={item.href}
        active={item.active}>{item.name}
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

export default NavBreadcrumbs;