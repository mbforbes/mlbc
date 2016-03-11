// Requires
var hljs = require('highlight.js'),
	fs = require('fs');


// Actual default values
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  },
  typographer: true
});

// add anchors
md.use(require("markdown-it-anchor"), {
	// permalink: true,
	// permalinkBefore: true
});

// add table of contents
/*
md.use(require("markdown-it-table-of-contents"), {
	includeLevel: 2
});
*/

// TODO(mbforbes): Try out Hexo for this.

// script
var above = fs.readFileSync('snippets/above.html', {encoding: 'utf8'});
var below = fs.readFileSync('snippets/below.html', {encoding: 'utf8'});
var contents = fs.readFileSync('index.md', {encoding: 'utf8'});
var marked = md.render(contents);

console.log(above);
console.log(marked);
console.log(below);
