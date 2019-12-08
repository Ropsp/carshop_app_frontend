import React from 'react';
import './App.css';
import Carlist from './components/carlist';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar position= "static">
        <ToolBar>
          <Typography variant="h3">
            CarShop
          </Typography>
        </ToolBar>
      </AppBar>
      <Carlist />
    </div>
  );
}

export default App;
