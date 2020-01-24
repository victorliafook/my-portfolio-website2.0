# my-portfolio-website2.0
Rewriting my personal portfolio website using React
http://liafook.com

## Previous Website info:

Created in 2017. Check the [repository](https://github.com/victorliafook/my-portfolio-web-site);

Static website built using AngularJS (1.6) and Twitter Bootstrap 3;

Hosted in AWS S3;

Automated Build using a Github Bucket within AWS Code Build;

Extra Libs/Packages:
* Angular UI-Router
* Font Awesome
* JQuery

## New Version:

Static website built using React and Twitter Bootstrap 4; Kickstarted using `react-create-app`

Hosted in AWS S3;

Automated Build using a Github Bucket within AWS Code Build;

Basically the same content, just some reviews and editions;

Extra Packages:
* [react-create-app](https://github.com/facebook/create-react-app)
* [React Bootstrap](https://react-bootstrap.netlify.com/)
* [React Router](https://www.npmjs.com/package/react-router-dom)
* [Font Awesome](https://fontawesome.com/)

## Run development version
```
$ npm install
$ npm start
```

## Build Production version
```
$ npm install
$ npm run build
```
After building, the static bundle will be ate build directory. Thats the content served on AWS S3.
