import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.handleClick(this.props.idx);
  } 
  render() {
    const {locked, val, disabled, rolling} = this.props;
    const dieFaces = ['one','two','three','four','five','six'];
    let iconClass = `Die fas fa-dice-${dieFaces[val - 1]} fa-5x `;
    if (locked) iconClass += 'Die-locked';
    if (rolling && !locked) iconClass += 'Die-rolling';
    return (
      <i
        className={iconClass}
        onClick={this.handleClick}
        disabled={disabled}
      />
    );
  }
}

export default Die;
