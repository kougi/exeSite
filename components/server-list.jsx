import React from 'react'

import {connect} from 'react-redux'
import * as actions from '../actions'


//Individual server list items
class ServerListItem extends React.Component {

    handleClick() {
        this.props.dispatch(actions.clickTab(this.props.id));
    }


    render() {
        let tabClass;
        if (this.props.activeTab == this.props.id) {
            tabClass = 'active';
        } else {
            tabClass = 'album'
        }

        return (
            <li className={'tab-link ' + tabClass}
                onClick={this.handleClick.bind(this)}
            >
                <div className="serverItem">
                    <h2>{this.props.serverName} <span>(0/16)</span></h2>
                    <ul>
                        <li><i>Recent Winner:</i> <span>Kougi.exe</span></li>
                        <li><i>Top Player:</i> <span>Kougi.exe</span></li>
                        <li><i>Current map:</i> <span>Asylum</span></li>
                        <li>Join Now >>></li>
                    </ul>
                </div>
            </li>
        );
    }
}

ServerListItem = connect((state) => {
    return {
        activeTab: state.activeTab
    }
})(ServerListItem);

export class ServerList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="serverList">
                <ul className="tabs">
                    <ServerListItem id={1} serverName="exe.pub | Free For All Instagib" index={0}/>
                    <ServerListItem id={2} serverName="exe.pub | Relaxed Running" index={0}/>
                </ul>
            </aside>
        );
    }
}
