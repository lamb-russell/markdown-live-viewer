// Import necessary modules from npm packages
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import markdownit from 'markdown-it';
import hljs from 'highlight.js';

// Initialize markdown-it with highlight.js support
const md = markdownit({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                       hljs.highlight(str, { language: lang }).value +
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
    const transformer = new Transformer();

    // Transform Markdown text into mindmap data
    const { root } = transformer.transform(text);

    // Clear previous mindmap (if any) before rendering a new one
    while (mindmapOutput.firstChild) {
        mindmapOutput.removeChild(mindmapOutput.firstChild);
    }

    // Initialize and render the mindmap
    Markmap.create(mindmapOutput, {
        nodeFontSize: 18,      // Increase font size
        spacingVertical: 30,   // Increase vertical spacing between nodes
        spacingHorizontal: 60, // Increase horizontal spacing between nodes
    }, root);
    
}

// Event listener for live updating both HTML preview and Mindmap
input.addEventListener('input', () => {
    const text = input.value;
    renderMarkdownToHTML(text);       // Update HTML preview
    renderMarkdownToMindmap(text);    // Update Mindmap visualization
});
