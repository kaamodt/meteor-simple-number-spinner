Package.describe({
  name: 'kaamodt:simple-number-spinner',
  summary: 'Simple meteor number spinner',
  version: '0.0.5',
  git: 'https://github.com/kaamodt/meteor-simple-number-spinner.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['templating'], 'client');
  api.addFiles(['lib/client/simple-number-spinner.html', 'lib/client/simple-number-spinner.js', 'lib/client/simple-number-spinner.css' ], 'client');
});
