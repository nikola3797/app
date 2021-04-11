import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Pravi Burger</NavigationItem>
        <NavigationItem link="/porudzbine" exact>Porudzbine</NavigationItem>
        <NavigationItem link="/korpa" exact>Korpa</NavigationItem>
        <NavigationItem link="/odjava" exact>Odjavi se</NavigationItem>
        <NavigationItem link="/prijava" exact>Prijavi se</NavigationItem>
    </ul>
);

export default navigationItems;