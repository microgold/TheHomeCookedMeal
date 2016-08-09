import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {AuthService} from './services/auth-service';

@inject(AuthService)
export class Signup{
    heading = 'Share your Cooking Skills for Profit!';

    constructor(authService)
    {
        this.authService = authService;
    }
  
    attached() {
        this.login();
  }
  
    login() {
        this.authService.launchLoginDialog();
    }
}