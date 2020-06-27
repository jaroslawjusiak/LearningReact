import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    let authItem = "Authenticate";
    let authLink = "/auth"
    if (props.isAuthenticated) {
        authItem = "Logout";
        authLink = "/logout"
    }

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
            <NavigationItem link={authLink}>{authItem}</NavigationItem>
        </ul>
    );

};

export default navigationItems;