import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    let authItem = "Authenticate";
    if (props.isAuthenticated) {
        authItem = "Logout";
    }

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
            <NavigationItem link="/auth">{authItem}</NavigationItem>
        </ul>
    );

};

export default navigationItems;