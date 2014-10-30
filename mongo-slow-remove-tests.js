// Write your tests here!
// Here is an example.
Tinytest.addAsync('chhib:mongo-slow-remove - Ensure all documents are removed', function (test, onComplete) {
  
  var coll = new Mongo.Collection('mongo_slow_remove');

  test.equal(typeof coll.slowRemove, 'function', 'Collection should have slowRemove()');


  coll.remove({});
  test.equal(coll.find().count(), 0, 'Collection should be empty');

  var doc = {field: 'with some data'};
  coll.insert(doc);
  coll.insert(doc);
  coll.insert(doc);
  coll.insert(doc);
  coll.insert(doc);

  test.equal(coll.find().count(), 5, 'Should have inserted documents');

  // Throttle and wait for all documents to be removed
  coll.slowRemove({}, 2, 300);

  Meteor.setTimeout(function () {
    test.equal(coll.find().count(), 0, 'Should have removed all documents slowly');
  }, 2000);
});
