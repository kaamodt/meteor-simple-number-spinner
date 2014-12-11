Package.describe({
  name: 'kaamodt:simple-number-spinner',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('kaamodt:simple-number-spinner.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kaamodt:simple-number-spinner');
  api.addFiles('kaamodt:simple-number-spinner-tests.js');
});
