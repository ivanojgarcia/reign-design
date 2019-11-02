# Application for show contents about NodeJS

The present project consists of the consumption and downloading of content from a REST API which subsequently enters a Mongo DB Database 

The technology for endpoint manipulation and data insertion is GraphQL.

[![N|Solid](data:image/png;base64,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)](https://graphql.org/)

Likewise, the Server responsible for raising the application from the backend is Apollo Server
[![N|Solid](data:image/png;base64,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)](https://www.apollographql.com/)


The technologies used to develop it were:.

  - Express
  - NodeJS
  - ReactJS

# Get started

Clone the repository
```sh
git clone https://github.com/ivanojgarcia/reign-design.git
```

Install developer dependencies (installation of dependencies from the package-json)

-First we start the server, for this we will do the following:

```sh
$ cd server
$ npm install
```

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
