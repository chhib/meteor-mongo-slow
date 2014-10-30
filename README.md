# Mongo slow methods

Extends `Mongo.Collection` on the server with `slow` methods:

- `slowRemove(selector, chunk, delay)`

The slow approach is to allow the oplog replication to catch up when managing large amounts of documents. Based of this blog post from Compose: [Going Slow for Performance](https://blog.compose.io/going-slow-for-performance-mongodb-shell-power/)

## Installation

To install the package simply type:

```
meteor add chhib:mongo-slow
```

## Usage

```
HugeCollection = new Mongo.Collection('huge_collection');

// Removing 1 M docs from a collection, it is unwise to use HugeCollection.remove();
// Use HugeCollection.slowRemove() instead!
var selector = {}; // Which documents to remove
var chunk = 1000;  // Remove 1000 documents
var delay = 5000;  // every 5 second

HugeCollection.slowRemove(selector, chunk, delay);
```