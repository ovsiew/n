/*
*   nebula - site.js
*   javascript executed on every page goes here
*/

var codeblocks;
var highlightedBlocks;

window.onload = function() {

    // Initialize codeblocks w/ highlight.js syntax highlighting
    // @TODO fix me: There is definitly a better way to do this instead of grabbing every <pre> block
    // But highlight.js acts weird with Hexo, possibility due to hexo's formatting of code blocks
    codeblocks = document.getElementsByTagName("pre");
    for (i = 0; i < codeblocks.length; i++) {
        hljs.highlightBlock(codeblocks[i]);
    }

    // Grab all highlighted code and put "copy to clipboard" buttons above
    highlightedBlocks = document.getElementsByClassName("highlight");
    for (i = 0; i < highlightedBlocks.length; i++) {

        var codeText = highlightedBlocks[i].querySelector("td.code").innerText;
        var copyBtn = "<a class='copy-code-btn' href='javascript:copyCode(" + i + ");'>Copy</a>";
        highlightedBlocks[i].innerHTML += copyBtn + "<br>";
    }

}

// Copies code to clipboard
// Creates a hidden text area to copy from
// i = index of .highlight block (this method is called from onLoad function above)
function copyCode(i) {
    var copyTextArea = document.createElement("textarea");
    document.body.appendChild(copyTextArea);
    copyTextArea.value = highlightedBlocks[i].querySelector("td.code").innerText;
    copyTextArea.select();
    document.execCommand("cut");
    document.body.removeChild(copyTextArea);
    highlightedBlocks[i].querySelector("a.copy-code-btn").innerText = "Copied!";
    setTimeout(function() {
        highlightedBlocks[i].querySelector("a.copy-code-btn").innerText = "Copy";
    }, 3000);
}