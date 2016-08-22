import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {StateService} from '../services/state-service';


@inject(StateService)

export class Application{

  constructor(stateService)  {
    this.stateService = stateService;

    this.fullname = '';
    this.address = '';
    this.city = '';
    this.selectedState = null;
    this.zip = ''
    this.email = ''

    this.stateService.getStates().then(
      data => {
        this.states = this.stateService.states;
    });
  }



submitForm(){
  console.log(`fullname is ${this.fullname}, state is ${this.selectedState.name}, and zip is ${this.zip}.`);

}


}
