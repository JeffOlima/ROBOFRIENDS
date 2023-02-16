import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CradList from './CardList';
import 'tachyons';
import { robots } from './robots';


ReactDOM.render(
                   <CradList robots={robots}/>       
, document.getElementById('root'));

