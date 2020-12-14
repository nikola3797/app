import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Pravi Burger</NavigationItem>
        <NavigationItem link="/">Odjavi se</NavigationItem>
        <NavigationItem link="/login">Prijavi se</NavigationItem>
    </ul>
);

export default navigationItems;