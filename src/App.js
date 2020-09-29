/* import React, { Component } from "react";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // eslint-disable-next-line 
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50
    };

    return (
      <div>
        <Content/>
      </div>
    );
  }
}

export default App; */

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MainDish from "./components/MainDish";
import recipes from './assets/recipes.png';
import SideDish from "./components/SideDish";
import DessertDish from "./components/DessertDish";
import NewRecipe from "./components/newRecipe";

const style = {
  background: '#fcba03',
};


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App-header">
      <AppBar style={style} position="auto">
      <h1>Recipe Me <img className="photo" src={recipes} alt="logo"></img></h1>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Main Dishes" {...a11yProps(0)} />
          <Tab label="Side Dishes" {...a11yProps(1)} />
          <Tab label="Desserts" {...a11yProps(2)} />
          <Tab label="Add a new Recipe" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MainDish></MainDish>      
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SideDish></SideDish>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DessertDish></DessertDish>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NewRecipe></NewRecipe>
      </TabPanel>
    </div>
  );
}