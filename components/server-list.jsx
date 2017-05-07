import React from 'react'





//Individual server list items
class ServerListItem extends React.Component{

handleClick() {
    this.props.onClick(this.props.index)
  }

    
    render() {
        return (
            <li className={'tab-link' +this.props.isActive ? 'active' : 'album'} 
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

export class ServerList extends React.Component{
 constructor(props) {
    super(props)
    this.state = {
      activeIndex: null
    }
  }

  handleClick(index) {
    this.setState({activeIndex: index})
  }
    render() {
        return (
            <aside className="serverList">


            <div className="status">Selected Item: { this.state.selectedItem }</div>
    <Toggle items={ items } selectedItem={this.state.selectedItem} onSelect={this.onSelect} />

            <ul className="tabs">
                <ServerListItem  serverName="exe.pub | Free For All Instagib"
                index={0} isActive={this.state.activeIndex===0} onClick={this.handleClick.bind(this)} 
                 />
                <ServerListItem  serverName="exe.pub | Relaxed Running"
                index={0} isActive={this.state.activeIndex===1} onClick={this.handleClick.bind(this)}  
                />  
             </ul>
             </aside>
        );
    }
}



function Toggle(props) {
  return <div className="toggle"> 
    {props.items.map((item)=>
                     <ToggleItem 
                       item={item} 
                       key={item.index} 
                       selected={props.selectedItem == item.index} 
                       onSelect={props.onSelect} />)} 
  </div>
}



