import React, { Component } from 'react'
import './button.scss';
import Button from './Button';
import FoodTypes from '../../RootComponents/FoodTypes';
import Random from '../../RootComponents/Random';
import TravelTo from '../../RootComponents/TravelTo';
import Dialog from '../../components/Global/Dialog';
export default class Buttons extends Component {

  state = {
    foodTypesOpen: false,
    randomChoiceOpen: false,
    travelToOpen: false
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ foodTypesOpen: true, randomChoiceOpen: false, travelToOpen: false})} className={`food-types ${this.state.foodTypesOpen ? `active` : ``}`} buttonText="Food Types"/>
        <Button onClick={() => this.setState({ randomChoiceOpen: true, foodTypesOpen: false, travelToOpen: false})} className={`random-choice ${this.state.randomChoiceOpen ? `active` : ``}`} buttonText="Random"/>
        <Button onClick={() => this.setState({ travelToOpen: true, randomChoiceOpen: false, foodTypesOpen: false})} className={`travel-to ${this.state.travelToOpen ? `active` : ``}`} buttonText="Travel To"/>

        <Dialog isOpen={this.state.foodTypesOpen} onClose={() => this.setState({ foodTypesOpen: false})} dialogClass={`food-types ${this.state.foodTypesOpen ? `active` : ``}`}>
          <FoodTypes />
        </Dialog>

        <Dialog isOpen={this.state.randomChoiceOpen} onClose={() => this.setState({ randomChoiceOpen: false})} dialogClass={`random-choice ${this.state.randomChoiceOpen ? `active` : ``}`}>
          <Random />
        </Dialog>

        <Dialog isOpen={this.state.travelToOpen} onClose={() => this.setState({ travelToOpen: false})} dialogClass={`travel-to ${this.state.travelToOpen ? `active` : ``}`}>
          <TravelTo />
        </Dialog>
      </div>
    )

  }
};