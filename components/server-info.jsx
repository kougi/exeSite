import React from 'react'

//Server info
export class ServerStatsMain extends React.Component{
    render() {
        return (
        <article className="recentRecords">
        <h4>Recent victories:</h4>
             <ul>
                <li><span>Kougi.exe</span> on <span>Asylum</span></li>
                <li><span>Kougi.exe</span> on <span>Asylum</span></li>
                <li><span>Kougi.exe</span> on <span>Asylum</span></li>
                <li><span>Kougi.exe</span> on <span>Asylum</span></li>
             </ul>
        </article>
        );
    }
}

//Individual server list items
export class ServerStatsSide extends React.Component{
    render() {
        return (
        <article className="serverData">
        <h4>Recent victoriedds:</h4>
         <ul>
            <li><span>Kougi.exe</span> on <span>Asylum</span></li>
            <li><span>Kougi.exe</span> on <span>Asylum</span></li>
            <li><span>Kougi.exe</span> on <span>Asylum</span></li>
            <li><span>Kougi.exe</span> on <span>Asylum</span></li>
         </ul>
        </article>
        );
    }
}



