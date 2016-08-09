﻿export class AuthService {  

    lock = new Auth0Lock('KhXgPLnB696iGhJY7VXSJgdDnMtJaA2i', 'microgold.auth0.com', {
        auth: {
            redirectUrl: 'http://localhost:1811/#/profile',
            responseType: 'code',
            params: {
                scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
            }
        }
    });
    isAuthenticated = false;

    constructor() {
        this.lock.on("authenticated", (authResult) => {
            self.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    // Handle error
                    return;
                }
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
                self.isAuthenticated = true;
                self.lock.hide();
            });

            if(tokenIsExpired())  {
                this.isAuthenticated = false;
            }
            else {
                this.isAuthenticated = true;
            }
        });
    }

    launchLoginDialog() {
             this.lock.show();   
    }

    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.isAuthenticated = false;   
        this.decodedJwt = null;
    }


}