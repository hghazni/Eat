import React, { Component } from 'react'
import './button.scss';
import Button from './Button';
import FoodTypes from '../../RootComponents/FoodTypes';
import Random from '../../RootComponents/Random';
import TravelTo from '../../RootComponents/TravelTo';
import Dialog from '../../components/Global/Dialog';
import AddEatery from '../../RootComponents/AddEatery';

export default class Buttons extends Component {

  state = {
    foodTypesOpen: false,
    randomChoiceOpen: false,
    travelToOpen: false,
    addEatery: false
  }

  render() {

    const {foodTypesOpen, randomChoiceOpen, travelToOpen, addEatery} = this.state;

    return (
      <div>
        <Button
            onClick={() => this.setState({ foodTypesOpen: true, randomChoiceOpen: false, travelToOpen: false, addEatery: false})}
            className={`food-types ${foodTypesOpen ? `active` : ``}`}
            buttonText="Food Types"
          />
        <Button
          onClick={() => this.setState({ randomChoiceOpen: true, foodTypesOpen: false, travelToOpen: false, addEatery: false})}
          className={`random-choice ${randomChoiceOpen ? `active` : ``}`}
          buttonText="Random"
        />
        <Button
          onClick={() => this.setState({ travelToOpen: true, randomChoiceOpen: false, foodTypesOpen: false, addEatery: false})}
          className={`travel-to ${travelToOpen ? `active` : ``}`}
          buttonText="Travel To"
        />
        <Button
          onClick={() => this.setState({ travelToOpen: false, randomChoiceOpen: false, foodTypesOpen: false, addEatery: true})}
          className={`addEatery ${addEatery ? `active` : ``}`}
          buttonText="+"
        />

        <Dialog
          isOpen={this.state.foodTypesOpen}
          onClose={() => this.setState({ foodTypesOpen: false})}
          dialogClass={`food-types ${foodTypesOpen ? `active` : ``}`}>
          <FoodTypes />
        </Dialog>

        <Dialog
          isOpen={this.state.randomChoiceOpen}
          onClose={() => this.setState({ randomChoiceOpen: false})}
          dialogClass={`random-choice ${randomChoiceOpen ? `active` : ``}`}>
          <Random />
        </Dialog>

        <Dialog
          isOpen={this.state.travelToOpen}
          onClose={() => this.setState({ travelToOpen: false})}
          dialogClass={`travel-to ${travelToOpen ? `active` : ``}`}>
          <TravelTo />
        </Dialog>

        <Dialog
          isOpen={this.state.addEatery}
          onClose={() => this.setState({ addEatery: false})}
          dialogClass={`addEatery ${addEatery ? `active` : ``}`}>
          <AddEatery />
        </Dialog>
      </div>
    )

  }
};