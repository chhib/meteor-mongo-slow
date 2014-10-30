// Future = Npm.require('fibers/future');

var Extensions = {
  
  slowRemove: function (selector, chunk, delay) {
    var totalRemoves = 0;
    var run = true;

    if (!chunk)
      chunk = 256;

    if (!delay)
      delay = 1000;

    while (run) {
      var chunkIds = this.find(selector, {fields: {_id: 1}, limit: chunk}).map(function (doc) { return doc._id; });
      this.remove({_id: {$in: chunkIds}});
      totalRemoves += chunkIds.length;
      
      run = chunkIds.length > 0;
      
      Meteor._sleepForMs(delay);
    }
    return totalRemoves;
  }

};

if (!constr) constr = typeof Mongo !== "undefined" ? Mongo.Collection : Meteor.Collection;

_.extend(constr.prototype, Extensions);
