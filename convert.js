const fs = require('fs');
const marked = require('marked');

const markdownFile = './shortcuts.md';
const markdownContent = fs.readFileSync(markdownFile, 'utf-8');

console.log('Converting markdown to HTML...');

let bodyContent = marked.parse(markdownContent);

bodyContent = bodyContent.replace(/<h2>(.*?)<\/h2>/g, ''); 
bodyContent = bodyContent.replace(/<h3>(.*?)<\/h3>/g, '<article><h3>$1</h3>');

bodyContent = bodyContent.replace(/<\/ul>/g, '</ul></article>');

const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Shortcuts</title>
  <link rel="stylesheet" href="styles.css">
  <script src="https://cdn.jsdelivr.net/npm/html-to-image@1.10.5/dist/html-to-image.min.js" defer></script>

    <script defer>
    const saveButton = document.getElementById('saveButton');
    const content = document.getElementById('content');

    saveButton.addEventListener('click', () => {
      htmlToImage.toPng(content)
        .then((dataUrl) => {
s          const link = document.createElement('a');
          link.download = 'shortcuts-wallpaper.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Error generating PNG:', error);
        });
    });
  </script>
</head>
<body>
  <button id="saveButton">Save as PNG</button>
  <main>
    ${bodyContent}
  </main>
</body>
</html>
`;

fs.writeFileSync('./index.html', htmlTemplate);

console.log('Markdown converted to HTML successfully.');
