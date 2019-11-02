# Application for show contents about NodeJS

The present project consists of the consumption and downloading of content from a REST API which subsequently enters a Mongo DB Database 

The technology for endpoint manipulation and data insertion is GraphQL.

Likewise, the Server responsible for raising the application from the backend is Apollo Server

The technologies used to develop it were:.

  - Express
  - GraphQL
  - Apollo Server
  - NodeJS
  - ReactJS
  - Apollo Client

# Get started

Clone the repository
```sh
git clone https://github.com/ivanojgarcia/reign-design.git
```
Install or run Mongodb in your local machine

Install developer dependencies (installation of dependencies from the package-json)

-First we start the server, for this we will do the following:

```sh
$ cd server
$ npm install
$ npm start
```
If is necesary can you delete the package-lock.json
### Installation of client

To start the client we just have to install the dependencies

```sh
$ cd client
$ npm install
$ npm start
```
With these configurations the server must be running locally, it is important to note that Mongodb must be installed and running before each step

### Insert Data

If you have Mongo DB installed on your local machine with the default values, these will be taken by the configuration without problems, so it is time to inject the data system downloaded from the API https://hn.algolia.com/api/v1/search_by_date?query=nodejs

To insert the data to the database we must go to the system URL: http://localhost:3000/posts/create 

This will insert and create the data automatically by inserting 500 records for your test.

License
----

MIT


**Thanks!**
