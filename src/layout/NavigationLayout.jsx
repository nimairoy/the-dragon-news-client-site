import React from 'react';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const NavigationLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default NavigationLayout;