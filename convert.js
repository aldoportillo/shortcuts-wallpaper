const fs = require('fs');
const marked = require('marked');

const markdownFile = './README.md';
const markdownContent = fs.readFileSync(markdownFile, 'utf-8');

console.log('Converting markdown to HTML...');
const bodyContent = marked.parse(markdownContent);

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Markdown to HTML</title>
  <link ref="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  ${bodyContent}
</body>
</html>
`;

fs.writeFileSync('./index.html', htmlTemplate);

console.log('Markdown converted to HTML successfully.');
