import React from "react";
import "./styles.css";
import "./App.css"
import { Tabs, Tab, AppBar} from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import image from './image3.svg'


import { Icon } from '@iconify/react';



import MaleIcons from "./MaleIcons";
import FemaleIcons from "./FemaleIcons";
import FaceIcons from "./FaceIcons";
import ShoeIcons from "./ShoeIcons";
import PantIcons from "./PantIcons";
import ShirtIcons from "./ShirtIcons";
import CapIcons from "./CapIcons";
import ArmBands from "./ArmBands";


export default function App() {
  const routes = ["/maleIcons", "/femaleIcons","/faceIcons","/shoeIcons","/pantIcons","/shirtIcons","/capIcons","/armBands"];
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <AppBar>
              <Tabs value={history.location.pathname !== "/"? history.location.pathname: false }>

                 {console.log(history.location.pathname)}

                <Tab value={routes[0]} label={<Icon icon="bx:male" width="60" height="50" />} component={Link}  to={routes[0]}/>      
                <Tab value={routes[1]} label={<Icon icon="bx:female" width="60" height="50" />} component={Link} to={routes[1]} />
                <Tab value={routes[2]} label={<Icon icon="emojione-monotone:girl"  width="60" height="50" />} component={Link} to={routes[2]} />
                <Tab value={routes[3]} label={<Icon icon="mdi:shoe-sneaker" width="60" height="50"/>} component={Link} to={routes[3]} />
                <Tab value={routes[4]} label={<Icon icon="noto:shorts" width="60" height="50" />} component={Link} to={routes[4]} />
                <Tab value={routes[5]} label={<Icon icon="fxemoji:mansshirt" width="60" height="50" />} component={Link} to={routes[5]} />
                <Tab value={routes[6]} label={<Icon icon="twemoji:billed-cap" width="60" height="50" />} component={Link} to={routes[6]} />
                <Tab value={routes[7]} label={<Icon icon="iconoir:wristwatch" width="60" height="50" />} component={Link} to={routes[7]} />


              </Tabs>
            </AppBar>
          )}
        />
        <div>
        <Switch >
          <Link path="/maleIcons" component={MaleIcons} />
          <Route path="/femaleIcons" component={FemaleIcons} >
            
          </Route>
          <Route path="/faceIcons" component={FaceIcons} />
          <Route path="/shoeIcons" component={ShoeIcons} />
          <Route path="/pantIcons" component={PantIcons} />
          <Route path="/shirtIcons" component={ShirtIcons} />
          <Route path="/capIcons" component={CapIcons} />
          <Route path="/armBands" component={ArmBands} />
        </Switch>
        </div>
      </BrowserRouter>
      <div className='navBar2' >
    <button className='cirlce'>
    </button>
    <button className='cirlce' > </button>
    
    <button className='cirlce'> </button>
    <button className='cirlce'> </button>
    <button className='cirlce'> </button>
    
    </div>
    <div>
      <image src={image} alt='image' ></image>
    </div>
    
    </div>
    
    </>
  );
}
