import configureStore from './store'
import {Provider, connect} from 'react-redux'
import * as actions from './actions'
import { initialState } from './reducers'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import ReactDOM from "react-dom"
import React from 'react'

//Component imports
import { ServerList } from './components/server-list'
import { ServerStatsMain,ServerStatsSide } from './components/server-info'

const store = configureStore(initialState);
const history = createBrowserHistory();


class Home extends React.Component {
    render () {
        return <h2>Home Sweet Home</h2>
    }
}

class About extends React.Component {
    render () {
        return <h2>we are cool, no doubt</h2>
    }
}


//Navigation menu
class Nav extends React.Component{
    render() {
        return (
              <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">etc</a></li>
                        <li><a href="#">Nav</a></li>
                        <li><a href="#">etc</a></li>
                    </ul>
            </nav>
        );
    }
}

//header info columns
class HeaderInfo extends React.Component{
    render() {
        return (
        <aside className="headerInfo ">
            <article><h2>About</h2><br />fff<br /><h1>Hello, {this.props.greeting}</h1>fdsf<br /></article>
            <article><p>Hello asr</p></article>
        </aside>
        );
    }
}


//header container
class Header extends React.Component{
    render() {
        return (
            <header className="siteHeader">
            {/* logo */}
            <h1 className="logo col3"><img src="img/exelogo.png" /> Clan<span>.exe</span></h1>
              
            <HeaderInfo  greeting="Clan.exe" />
                <Nav />

            </header>
        );
    }
}




//Map item / Map Thumbnail
class MapListItem extends React.Component{
    render() {
        return (
            <li>
                <img src={this.props.imgURL} />
                <div className="mapDetails">
                <h5>{this.props.mapName}</h5>
                <figure>Rating: <span class="rating">{this.props.Rating}</span> <span class="voteQty">(4 votes)</span></figure>
                </div>
                    
                <div className="mapPodium">
                    <ul>
                        <li>{this.props.topPlayer}</li>
                        <li>Kougi.exe</li>
                        <li>Kougi.exe</li>
                        </ul>
                    </div>
                </li>
        );
    }
}

//Map thumbnails/map list
class MapList extends React.Component{
    render() {
        return (
        <article className="mapList mapRecords">
         <ul>
            <MapListItem mapName="Asylum" Rating="+4" topPlayer="Kougi.exe" imgURL="http://xonotic.co/resources/mapshots/maps/asylum.jpg"/>
            <MapListItem mapName="Bloodrun" Rating="+4" topPlayer="Kougi.exe" imgURL="http://xonotic.co/resources/mapshots/maps/bloodrun_ql.jpg"/>
            <MapListItem mapName="Aerowalk" Rating="+4" topPlayer="Kougi.exe" imgURL="http://xonotic.co/resources/mapshots/maps/cpm22.jpg"/>
            <MapListItem mapName="Warfare" Rating="+4" topPlayer="Morosophos.exe" imgURL="http://xonotic.co/resources/mapshots/maps/warfare.jpg"/>
            <MapListItem mapName="Asylum" Rating="+4" topPlayer="Kougi.exe" imgURL="http://xonotic.co/resources/mapshots/maps/asylum.jpg"/>
            <MapListItem mapName="Asylum" Rating="+4" topPlayer="Kougi.exe" imgURL="http://xonotic.co/resources/mapshots/maps/asylum.jpg"/>
            <MapListItem mapName="Asylum" Rating="+4" topPlayer="Kougi.exe" imgURL="http://xonotic.co/resources/mapshots/maps/asylum.jpg"/>
            <MapListItem mapName="Asylum" Rating="+4" topPlayer="Kougi.exe" imgURL="http://xonotic.co/resources/mapshots/maps/asylum.jpg"/>
         </ul>
        </article>
        );
    }
}

//
class ServerInfo extends React.Component{
    render() {
        return (
        <main className="serverTabList col5 last">
        {/* tab 1*/}
        <section id="tab-1" className="tab-content current">
        <h3>Relaxed Running</h3>
            <ServerStatsMain />
            <ServerStatsSide />
            
            Main container
            <MapList />
        </section>
          </main>
        );
    }
}









class App extends React.Component {
    componentDidMount() {

    }

    render() {
        return <Router history={history}>
            <div className="containerInner">
                
                <Header />
                <ServerList />
                <ServerInfo />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    }
}



App = connect((state)  => {return {}})(App);


ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>,
    document.getElementById('app')
);