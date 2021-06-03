import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/svg4.svg";
import Comon from './Comon';
const Home=()=>{
    return (
         <>
            <Comon 
             name="Grow your Business" 
             imgsrc={web}
             visit="/service"
             btnname="Get Started"/>
         </>
    );
};

export default Home;