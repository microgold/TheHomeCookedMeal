import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import {tokenIsExpired} from './utils/tokenUtils';
import {AuthService} from './services/auth-service';

@inject(HttpClient, Router, AuthService)
export class App {
  message = 'Auth0 - Aurelia';
  
  
  
  constructor(http, router, authService) {
    this.http = http;
    this.router = router;
    this.authService = authService;
    var self = this;
      
    
    this.router.configure(config => {
      config.map([
        { route: ['','welcome'],  moduleId: './welcome',      nav: true,   title:'Welcome' },
        { route: 'chefs',  moduleId: './chefs',      nav: true,       title:'Chefs' },
         { route: 'signup',  moduleId: './signup',      nav: true,       title:'Sign Up' },
      
      ])
    });
    this.http.configure(config => {
      config.withDefaults({
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('id_token')}`
        }
      });
    });
    
    // add authservice here

    

  
  }
  

  
 
  
  
 
}
