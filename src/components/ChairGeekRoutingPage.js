import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LibraryFloor from "../containers/LibraryFloor";
import ChairGeekLoadingPage from "./ChairGeekLoadingPage";

const ChairGeekRoutingPage = () =>
    <Router>
        <div>
                    <Route exact path='/' component={ChairGeekLoadingPage}/>
                    <Route exact path='/Floor/:id' component={LibraryFloor}/>
        </div>
    </Router>
export default ChairGeekRoutingPage
