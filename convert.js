const fs = require('fs');
const marked = require('marked');

const markdownFile = './shortcuts.md';
const markdownContent = fs.readFileSync(markdownFile, 'utf-8');

console.log('Converting markdown to HTML...');

let bodyContent = marked.parse(markdownContent);

bodyContent = bodyContent.replace(/<h2>(.*?)<\/h2>/g, '<section><h2>$1</h2>'); // Wrap <h2> in <section>
bodyContent = bodyContent.replace(/<h3>(.*?)<\/h3>/g, '<article><h3>$1</h3>'); // Wrap <h3> in <article>

bodyContent = bodyContent.replace(/<\/ul>/g, '</ul></article></section>');

if (bodyContent.startsWith('</section>')) {
  bodyContent = bodyContent.replace('</section>', '');
}

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Shortcuts</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    ${bodyContent}
  </main>
</body>
</html>
`;

fs.writeFileSync('./index.html', htmlTemplate);

console.log('Markdown converted to HTML successfully.');
