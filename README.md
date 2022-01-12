# Exercise

1. The request was to read from a json file an array of custom properties for and input html tag, and build a form.
2. Get a default object for the form also from a json file.
3. Update the object using a patch method

As it is not possible to directly update a file of the project, I used a Json Server for this propose.
https://www.npmjs.com/package/json-server. This are the steps:
1. npm install -g json-server
2. cd src\assets\
3. json-server --watch formdata.json


# Interview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
