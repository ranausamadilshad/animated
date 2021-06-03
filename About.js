import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/svg5.svg";
import Comon from './Comon';

const About=()=>{
    return (
         <>
        <Comon name="Welcome to " imgsrc={web} visit="/contact" btnname="Contact Now" />
         </>
    );
};

export default About;