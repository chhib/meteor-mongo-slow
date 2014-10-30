coll = new Mongo.Collection('mongo_slow_remove');

Tinytest.add('chhib:mongo-slow - slowRemove - Collection is extended with slowRemove()', function (test) {
  test.equal(typeof coll.slowRemove, 'function', 'Collection should have slowRemove()');
});

Tinytest.addAsync('chhib:mongo-slow - slowRemove - All documents are removed', function (test, onComplete) {
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

    onComplete();
  }, 2000);
});
