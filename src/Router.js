import React from 'react';
import {
    Router,
    Route,
    Link
} from 'react-router-dom';
import Output from './basic';
import Formm from './form';
// import About from './About'
import Navbaar from './Navbar';
import SeeAll from './seeAll'
// import Output from './basic'
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory()

const CustomRoutes = () => (
    <Router history={customHistory}>
        <div>
        {/* <Link to='/'>Home</Link>
        <Link to='/form'>Form</Link>

        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/form'>About</Link></li>
    </ul> */}
        <Navbaar/>
        {/* <Output/> */}
            <hr/>

            <Route exact path='/' component={Output} />
            <Route exact path='/form' component={Formm} />
            <Route exact path='/seeAll' component={SeeAll} />
            {/* <Route  exact path='/about' component={Formm} /> */}
        </div>
    </Router>
)

export default CustomRoutes;