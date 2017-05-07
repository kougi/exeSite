import React from 'react'

//Individual server list items
class ServerListItem extends React.Component{
    render() {
        return (
            <li className="tab-link current">
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

export class ServerList extends React.Component{
    render() {
        return (
            <aside className="serverList">
            <ul className="tabs">
                <ServerListItem  serverName="exe.pub | Free For All Instagib" />
                <ServerListItem  serverName="exe.pub | Relaxed Running" />  
             </ul>
             </aside>
        );
    }
}




