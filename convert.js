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
  <script src="script.js" defer></script>
</head>
<body>
 <button id="toggleColorSettings" class="toggle-btn">Show Color Settings</button>

  <div id="colorSettings" class="color-settings">
    <label for="bgColorPicker">Background Color:</label>
    <input type="color" id="bgColorPicker" value="#242424"><br>

    <label for="textColorPicker">Text Color:</label>
    <input type="color" id="textColorPicker" value="#ffffff"><br>

    <label for="accentColorPicker">Accent Color:</label>
    <input type="color" id="accentColorPicker" value="#F49A73"><br>

    <button id="resetColors">Reset to Default</button>
  </div>

  <main>
    ${bodyContent}
  </main>
</body>
</html>
`;

fs.writeFileSync('./index.html', htmlTemplate);

console.log('Markdown converted to HTML successfully.');
