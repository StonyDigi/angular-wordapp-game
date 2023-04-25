# Wordappp

check at here in live: https://angular-wordapp-game-somossy-laszlo.netlify.app/

class: 
	word: (uid: string, hun: string, eng: string, goods: number, bads: number)	

component:
	1.list (ahol látszanak a szavak) (itt van a delete is)
	2.create (ahol hozzáadunk egy új szót - űrlap)
	4.game (ahol kikérdeződnek a szavak) (a game-t csak a gamesettings-en keresztül érhetjük el, miután megadtuk a szavak számát)
	3.gamesettings (ahol megadjuk a szavak számát)

service:
	wordService
		__Array<Word> words - itt lesz minden szó tárolva
		__load() betölti a szavakat a local storeage-ból
		__save() elmenti a szavakat a local storeage-be
		__create(w: Word) elmenti az adott szót a gyűjteménybe
		__delete(uid: string) kitörli az adott id-jú új szót
		__playGame(limit: number) : Array<Word> ez visszaad ennyi random szót amennyi szavat választottunk
		__update(uid: string, goods : number, bads: number) ez elmenti az adott szó tippjének eredményét


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

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
