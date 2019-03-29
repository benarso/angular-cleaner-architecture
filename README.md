# Angular Cleaner Architecture
## What is it for ?
Note : I used this repo to learn Angular and Ngrx, experiment different architecture concepts, this is probably badly written, not very functionnal and should not be used as a reference. 

This is my attempt at implementing Robert C. Martin (Uncle Bob) Clean Architecture guidelines in Angular 7.
 This project is using (among others) : 
 - Angular's dependancy injection system
 - Ngrx observable store
 - Angular Material
 - Angular FlexLayout
 - Service Worker

###Featured modules:
####Auth : 
- Provides the app with a simple JWT authentication for Strapi.io API backend.
- Login page and route
- Login component

####Todo :

This module is structured in 3 main layers : 
- Presentation : Angular containers and components that can only communicate with a facade (Sandbox)
- Domain : Business logic and executable Usecase class that can dispatch actions and forward state changes to the presentation layer.
- Data : Angular services for managing api requests, Ngrx store to maintain application state

##Roadmap

- Make distinct Model classes for each layer with corresponding Mapper classes.
- Implement repository pattern to decouple Domain Usecases from Ngrx store 
- Refactor Auth module to take advantage of 3 layer architecture.
- Make a fully functional Todo list.
- Try to use Data and Domain layers to make a Mobile app (Ionic, Nativescript etc).
- Create angular-cli schematics to reduce boilerplate code.
- Write tests.
- Creation of a Layout module to manage layout state.
- A lot more to come !

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.
