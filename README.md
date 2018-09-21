# Matrix

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Deployment server

Setup Virtural Host in Apache to enable browser hard refresh/direct manual url navigation on browser by user.

For a local installation, like apache through xampp,
 - open D:\xampp\apache\conf\extra\httpd-vhosts.conf, assuming D:\xampp is the xampp deployment path
 - Assuming, 'matrix' is the app name, add the following to the very last of the file, provided if this is not already there
 <VirtualHost *:80>
    ServerName my-app

    DocumentRoot "D:/xampp/htdocs"

    <Directory "D:/xampp/htdocs/matrix">
        RewriteEngine on
 
        # Don't rewrite files or directories
        RewriteCond %{REQUEST_FILENAME} -f [OR]
        RewriteCond %{REQUEST_FILENAME} -d
        RewriteRule ^ - [L]

        # Rewrite everything else to index.html to allow html5 state links
        RewriteRule ^ index.html [L]
    </Directory>  
</VirtualHost>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


