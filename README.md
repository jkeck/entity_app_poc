# Proof of Concept Blacklight Entity App

This is a simple blacklight/rails application that includes fixtures and application code to index and display entities alongside traditional blacklight records.

## Installation

First clone this repository and then install dependencies using bundler.

```shell
$ git clone git@github.com:jkeck/entity_app_poc.git

$ cd entity_app_poc

$ bin/install
```

## Starting the application (the easy way)

There is a single rake command that should get things going for you easily.

```shell
$ bundle exec rake server:start
```

You can now go to http://localhost:3000 and see the blacklight app running with the fixtures indexed.

## Starting the server (the hard way)

The rake task above effectively just starts solr (using solr_wrapper), indexes fixtures, and starts the rails server.  You can run these steps independently if it suits you.

In one terminal start solr_wrapper:
```shell
$ solr_wrapper
```

In another terminal index the fixtures:
```shell
$ bundle exec rake entity_app:seed
```
In that same terminal start the rails app:
```shell
$ rails s
```

You can now go to http://localhost:3000 and see the blacklight app running with the fixtures indexed.
