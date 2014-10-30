# Mongo slow methods

Extends `Mongo.Collection` on the server with `slow` methods:

- `slowRemove(selector, chunk, delay)`

The slow approach is to allow the oplog replication to catch up when managing large amounts of documents.

Based of this blog post from Compose: ([Going Slow for Performance](https://blog.compose.io/going-slow-for-performance-mongodb-shell-power/))

--------------------------------------------------------------------------------

## Installation

To install the package simply type `meteor add chhib:mongo-slow` in your project directory.

--------------------------------------------------------------------------------

## Usage

```
// Removing 1 M docs from a collection, it is unwise to use coll.remove();

coll = new Mongo.Collection('huge_collection');

var selector = {}; // Which documents to remove
var chunk = 1000;  // Remove 1000 documents
var delay = 5000;  // every 5 second

coll.slowRemove(selector, chunk, delay);
```

--------------------------------------------------------------------------------

## Contributors

- Aaron Thorp ([http://www.aaronthorp.com](http://www.aaronthorp.com))

[![Support us via Gittip][gittip-badge]][aaronthorp]

[gittip-badge]: https://raw.github.com/twolfson/gittip-badge/0.1.0/dist/gittip.png
[aaronthorp]: https://www.gittip.com/aaronthorp/

