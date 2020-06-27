import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    let authItem = "Authenticate";
    let authLink = "/auth"
    let orders = null;
    if (props.isAuthenticated) {
        authItem = "Logout";
        authLink = "/logout"
        orders = <NavigationItem link="/orders">Orders</NavigationItem>;
    }

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            {orders}
            <NavigationItem link={authLink}>{authItem}</NavigationItem>
        </ul>
    );

};

export default navigationItems;