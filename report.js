var Report = require('cucumber-html-report');

var options = {
  source:    './cucumber_report.json',
  dest:      './',
  template:  './assets/template.html',
  title:     'Cucumber Report',
};

new Report(options).createReport();