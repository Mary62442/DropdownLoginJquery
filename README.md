DropdownLoginJquery
===================

 

Steps to create this repository
-------------------------------

 

[Download Git for Windows](https://git-scm.com/download/win)

 

Create an empty destination folder for the project and inside it initialize a
new empty repository

 

`$ git init `

 

[Download and install node js current version and npm
](https://nodejs.org/en/download/current/)

npm will allow to download packages

 

Install gulp globally

 

`$ npm install --global gulp-cli`

 

In the empty folder of the project create an empty package.json by typing

 

`$ npm init`

 

Follow the wizard with the required data

 

From inside the folder install gulp saving it in package.json as a dev
dependency

 

`$ npm install --save-dev gulp`

 

From inside the folder install gulp sass saving it in package.json as a dev
dependency

 

`$ npm install --save-dev gulp-sass`

 

From inside the folder install gulp webserver saving it in package.json as a dev
dependency

 

`$ npm install --save-dev gulp-webserver`

 

Create a gulpfile.js at the root of the project with the following code:

 

Refer to the content of the gulpfile.js
