// Initialize markdown-it with highlight.js support
const md = window.markdownit({
    highlight: function (str, lang) {
        if (lang && window.hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                       window.hljs.highlight(str, { language: lang }).value +
                       '</code></pre>';
            } catch (__) {}
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
});

// Get references to the input, HTML output, and mindmap SVG output
const input = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('markdown-output');
const mindmapOutput = document.getElementById('mindmap-output');

// Function to render Markdown to HTML
function renderMarkdownToHTML(text) {
    const htmlContent = md.render(text);
    htmlOutput.innerHTML = htmlContent;
}

// Function to render Markdown to Mindmap using markmap
function renderMarkdownToMindmap(text) {
    // Check if markmap libraries are available
    if (!window.markmap || !window.markmap.Transformer || !window.markmap.Markmap) {
        console.error("Markmap libraries are not loaded correctly.");
        return;
    }

    const { Transformer, Markmap } = window.markmap;
    const transformer = new Transformer();

    // Transform Markdown text into mindmap data
    const { root } = transformer.transform(text);

    // Clear previous mindmap (if any) before rendering a new one
    while (mindmapOutput.firstChild) {
        mindmapOutput.removeChild(mindmapOutput.firstChild);
    }

    // Initialize and render the mindmap
    Markmap.create(mindmapOutput, {}, root);
}

// Event listener for live updating both HTML preview and Mindmap
input.addEventListener('input', () => {
    const text = input.value;
    renderMarkdownToHTML(text);       // Update HTML preview
    renderMarkdownToMindmap(text);    // Update Mindmap visualization
});
