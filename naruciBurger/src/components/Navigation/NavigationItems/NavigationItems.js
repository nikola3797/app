import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Pravi Burger</NavigationItem>
        <NavigationItem link="/logout" exact>Odjavi se</NavigationItem>
        <NavigationItem link="/login" exact>Prijavi se</NavigationItem>
    </ul>
);

export default navigationItems;