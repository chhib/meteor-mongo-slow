Package.describe({
  name: 'chhib:mongo-slow',
  summary: 'Adds slowRemove method on the server to throttle and chunk large removes',
  version: '1.0.0',
  git: 'https://github.com/chhib/meteor-mongo-slow.git'
});

var configurePackage = function (api) {
  api.versionsFrom('1.0');
  api.use(['underscore', 'mongo'], 'server');
  api.addFiles('mongo-slow-remove.js', 'server');
};

Package.onUse(function(api) {
  configurePackage(api);  
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use('tinytest', 'server');
  api.addFiles('mongo-slow-remove-tests.js', 'server');
});
