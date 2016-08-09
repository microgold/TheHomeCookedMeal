# Setting Up the Home Cooked Meal WebSite

This site uses aurelia, bootstrap, and auth0 (for SSO) on the front ed.

The directions below will get you setup to 

## Getting Started

You will need `jspm` to install some of the dependencies.

```bash
npm install -g jspm
```

Clone the repo, then:

```bash
npm install
jspm install
```

Run the application with a web server such as **http-server**.

```bash
npm install -g http-server
http-server
```

You can also run directly out of visual studio 2015, which is why I included the web.config.

## Set Your Auth0 Credentials

If you haven't already done so, [sign up](https://auth0.com/signup) for your free Auth0 account.

Set your credentials in `Auth0Lock`. (currently my credentials are there)


```js
// src/app.js

...

lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);

...
```

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.