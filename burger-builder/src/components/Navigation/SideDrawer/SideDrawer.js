import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from './../../UI/Backdrop/Backdrop';
import Aux from './../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer];
    
    if (props.open){
        attachedClasses.push(classes.Open)
    }
    else{
        attachedClasses.push(classes.Close)
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems>

                    </NavigationItems>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;