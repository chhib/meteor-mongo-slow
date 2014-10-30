Package.describe({
  name: 'chhib:mongo-slow',
  summary: 'Adds slowRemove method on the server to throttle and chunk large removes',
  version: '1.0.0',
  git: 'https://github.com/chhib/meteor-mongo-slow.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['underscore', 'mongo']);
  api.addFiles('mongo-slow-remove.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chhib:mongo-slow');
  api.addFiles('mongo-slow-remove-tests.js');
});
