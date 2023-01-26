# TechTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Project description
Application is made based on this mockup https://drive.google.com/drive/folders/1SojsJNR7KKQvJdbskqiTF7vCol49LdPA

Application is made with Angular 15 using newest features like standalone components. 

Image carousel is made with ng-bootstrap, same for resposivity. 

There are unit tests created in components which i found myself worth testing, as most of the code is not too complex.

I didn`t use BEM because in my opinion it is not necessary in angular as we have styles encapsulation here.

Added text shadow to images captions, because on some images with white background this text was barely visible.

## Things that could be improved given more time
- Overall testing improvements:
1. Async pipe in template is calling real http methods - we can either remove component template in test, or provide mock instance of ProductsService like i did, but something didn`t work corretly, maybe because of standalone components
2. Add static class that will return some common modules and providers to import by component testing modules.
- Images are clipped on some resolutions, because some of them have different size ratio - to fix this we can for example add property to those products that should be affected, and set "background-size: contain" on them
- Images grouping code can be reviewed, createArrayIterator method in ArrayUtils looks fancy, but i think that it can be done easier
- I would load only part of bootstrap library with neccessary components to decrease bundle size

## Instructions of how to run application
1. Run "npm install" (or "npm i" shortcut) on main angular project folder
2. Run "ng serve"
3. Open browser on localhost:4200

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
