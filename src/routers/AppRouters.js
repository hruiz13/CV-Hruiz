import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { cvHruizScreen } from '../components/cvHruiz/cvHruizScreen';
import { ConocimientosScreen } from '../components/cvHruiz/ConocimientosScreen';
import { ProyectosScreen } from '../components/cvHruiz/ProyectosScreen';



export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route 
                    exact path="/"
                    component={ cvHruizScreen }
                />
                <Route 
                    exact path="/conocimientos"
                    component={ ConocimientosScreen }
                />
                <Route 
                    exact path="/proyectos"
                    component={ ProyectosScreen }
                />
                
            </Switch>
        </Router>
    )
}
