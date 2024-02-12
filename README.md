# cample-start

Official starting point for a [Cample.js](https://www.npmjs.com/package/cample) application. Create web applications using ready-made webpack or parcel templates.

## Installation

To create an application, it is better to use the official cample-start command to generate a “starting point”, choosing from two currently available templates.

```bash
npx cample-start
```

The main two templates are based on two module bundlers such as Webpack and Parcel. To select one of them from the list in the terminal, you can select the most suitable one. All of them have official support.

```
Project template:
webpack-app
parcel-app
```

After selecting a template, there is an option to create a name for the project.
```
Project name:new-app
```

The name may include "-" and "_" characters.

Afterwards, the process of installing the necessary files should begin in a folder with the name that you typed. If the installation was successful, the following message should appear:

```
Project ${projectName} installed successfully!
```

To subsequently install the application, enter the following command while in the project folder:

```bash
npm install
```

Also, any other package manager can be selected for such an installation. The "node_modules" folder is not automatically generated when installing the application via npx.

## Repository

[Repository](https://github.com/Camplejs/cample-start)

## Changelog

[Changelog](https://github.com/Camplejs/cample-start/releases)
