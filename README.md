# Iwdapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

To build for github pages you must have the following packages installed globally

node version 10.13.0 or up
https://www.npmjs.com/package/angular-cli-ghpages
https://www.npmjs.com/package/angular
https://www.npmjs.com/package/@angular/cli

then use this command
`ng build --prod --base-href "https://womentechmakersbcn.github.io/iwdapp/" --extract-css=false`

## Deploy to github pages

To deploy run this command
`ngh --dir=dist/iwdapp`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
