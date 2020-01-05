import React from 'react';
import logo from './logo.svg';
// import './App.css';

import {useRoutes, navigate } from 'hookrouter';

import ViewOpening from './screen/ViewOpening';
import ViewListTabungan from './screen/ViewListTabungan';
import ViewQuestionOne from './screen/ViewQuestionOne';
import ViewQuestionScenarioJemput from './screen/ViewQuestionScenarioJemput';
import ViewScenarioSettingMapGojek from './screen/ViewScenarioSettingMapGojek';
import ViewLoadingGojek from './screen/ViewLoadingGojek';
import ViewCongratulation from './screen/ViewCongratulation';


import NotFoundPage from './screen/NotFoundPage';
import { Typography } from '@material-ui/core';



const App = () => {

  const routes = {
    
    '/': () => <ViewOpening />,
    '/list-products' : () => <ViewListTabungan />,
    '/question-one': () => <ViewQuestionOne />,
    '/question-scenario-jemput-gojek': () => <ViewQuestionScenarioJemput />,
    '/map-gojek': () => <ViewScenarioSettingMapGojek />,
    '/loading-gojek': () => <ViewLoadingGojek />,
    '/congratulation' : () => <ViewCongratulation />

    
  };
  
  const routeResult = useRoutes(routes);
  
  return (

    // routeResult || <NotFoundPage />
    <Typography variant='h1'>
      Welcome to the jungle !
    </Typography>
    
  );
}

export default App;
