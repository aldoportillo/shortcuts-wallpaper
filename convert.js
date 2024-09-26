const fs = require('fs');
const marked = require('marked');

const markdownFile = './README.md';
const markdownContent = fs.readFileSync(markdownFile, 'utf-8');

console.log('Converting markdown to HTML...');

const htmlContent = marked.parse(markdownContent);

fs.writeFileSync('./index.html', htmlContent);

console.log('Markdown converted to HTML successfully.');
