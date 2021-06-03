import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import {Switch,Route,Redirect} from 'react-router-dom';

const App=()=>{
    return(
        <div>
            <Navbar/>     
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/service" component={Service}/>
                <Route exact path="/contact" component={Contact}/>
                <Redirect to="/"/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;