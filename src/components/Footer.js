import React from 'react';
import FitlerLink from './../containers/FitlerLink';
import { VisibilityFilters } from './../actions';
// import style from './../styles/StyledTodoList';

const Footer = () => {

  // const { Li } = style;

  return (
    <p>
      Show: <FitlerLink filter={VisibilityFilters.SHOW_ALL}>All</FitlerLink>
      {', '}
      <FitlerLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FitlerLink>
      {', '}
      <FitlerLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FitlerLink>
    </p>
  );
}
 
export default Footer;