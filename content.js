console.log("Scanning document for mentions of the former guy");

var findAndReplace = [
	// Variations of President
	['President Donald John Trump', 'The Former Guy'],
	['President Donald J. Trump', 'The Former Guy'],
	['President Donald Trump', 'The Former Guy'],
	['President Trump', 'The Former Guy'],

	// Variations of Name
	['Donald John Trump', 'The Former Guy'],
	['Donald J. Trump', 'The Former Guy'],
	['Donald Trump', 'The Former Guy'],
	['Trump', 'The Former Guy']
]


const replaceOnDocument = (pattern, string, {target = document.body} = {}) => {
  // Handle `string` — see the last section
  [
    target,
    ...target.querySelectorAll("*:not(script):not(noscript):not(style)")
  ].forEach(({childNodes: [...nodes]}) => nodes
    .filter(({nodeType}) => nodeType === document.TEXT_NODE)
    .forEach((textNode) => {
			findAndReplace.forEach((findAndReplacePair) => {
				textNode.textContent = textNode.textContent.replace(findAndReplacePair[0], findAndReplacePair[1]);
			})
		}
	));
};

window.onload = function() {
	replaceOnDocument('Donald Trump', "The Former Guy", {target: document.body});
}
