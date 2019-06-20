# Score Board

This project was created using Angular for Front-End and Node-Express for Back-End. We use Electron to deploy it in Windows to avoid the need of install Node and Angular CLI or Docker.

You can clone this repository locally:

```
git clone https://github.com/devonfw-forge/devon4node-score-board.git
```

# Using Electron to run the application

This project use [Maximegris' angular-electron](https://github.com/maximegris/angular-electron) template.

## Running the existing Electron release

You can run an existing Electron release going to `electron/release/win-unpacked` and executing `score-board.exe`, you can change the source data used to draw charts editing `electron/release/win-unpacked/data.json`. You can copy the folder `electron/release/win-unpacked` where you want an rename it.

## Building a new Electron release

To build a new release you need to have installed NodeJs lts in your computer, you can download it from his [official website](https://nodejs.org/es/download/).

The command to build the release is:

```
npm run electron:windows
```

After running this command your release are stored in `electron/release/win-unpacked`.

## Developing with Electron

If you want to generate Angular components with Angular-cli , you MUST install @angular/cli in npm global context. Please follow [Angular-cli documentation](https://github.com/angular/angular-cli) if you had installed a previous version of angular-cli.

```
npm install -g @angular/cli
```

Install dependencies with npm in electron folder:

```
npm install
```

Now you can start your application with:

```
npm start
```

You can install new dependencies using

```
npm install --save <dependencie name>
```

Then you can import it in **main.ts** file.

### Included Commands

| Command                  | Description                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| npm run ng:serve:web     | Execute the app in the browser                                                                            |
| npm run build            | Build the app. Your built files are in the /dist folder.                                                  |
| npm run build:prod       | Build the app with Angular aot. Your built files are in the /dist folder.                                 |
| npm run electron:local   | Builds your application and start electron                                                                |
| npm run electron:linux   | Builds your application and creates an app consumable on linux system                                     |
| npm run electron:windows | On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems       |
| npm run electron:mac     | On a MAC OS, builds your application and generates a .app file of your application that can be run on Mac |

# Using docker to run the application

To run the application using docker you need to have docker installed in your computer, you can download it from his [official website](https://www.docker.com/).

In order to create the containers use:

```
docker-compose up --build
```

Now you can enter to the application using `localhost:4200` in the web browser. To change the chart data use `localhost:4200/update`.

# Running the application locally for development

## Set-up

First of all you need to have installed NodeJs lts in your computer, you can download it from his [official website](https://nodejs.org/es/download/).

If you want to generate Angular components with Angular-cli , you MUST install @angular/cli in npm global context. Please follow [Angular-cli documentation](https://github.com/angular/angular-cli) if you had installed a previous version of angular-cli.

```
npm install -g @angular/cli
```

To install dependencies with npm, enter in angular folder and run the following command:

```
npm install
```

And then enter in node folder and run:

```
npm install
```

## Starting the application

Enter in node folder an run

```
npm start
```

Enter in Angular folder and run

```
ng serve -o
```

Now you can enter to the application using `localhost:4200` in the web browser.

## Editing charts values

To change the chart data you can use `localhost:4200/update` or you can also change the data directly editing **data.json** in `node/data.json`
