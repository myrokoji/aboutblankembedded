// JavaScript-only implementation to replicate the behavior of the HTML file

// Create and style the document dynamically
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
document.body.style.margin = '50px';

// Create the heading
const heading = document.createElement('h1');
heading.textContent = 'Open Link in a New about:blank Page';
document.body.appendChild(heading);

// Create the description paragraph
const description = document.createElement('p');
description.innerHTML = 'Enter a URL below and click the button to open it in a new <code>about:blank</code> page:';
document.body.appendChild(description);

// Create the input field
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.id = 'urlInput';
inputField.placeholder = 'Enter URL here';
inputField.style.width = '70%';
inputField.style.padding = '10px';
inputField.style.margin = '10px 0';
inputField.style.fontSize = '16px';
document.body.appendChild(inputField);

// Create the button
const button = document.createElement('button');
button.textContent = 'Open Link';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';
button.addEventListener('click', openLink);
document.body.appendChild(button);

// Function to open the link in a new about:blank page
function openLink() {
    const url = document.getElementById('urlInput').value;
    console.log('URL entered:', url);
    if (!url) {
        alert('Please enter a valid URL.');
        console.log('No URL entered.');
        return;
    }

    const newWindow = window.open('about:blank', '_blank');
    if (newWindow) {
        console.log('New window opened successfully.');
        newWindow.location.href = url;
        console.log('URL set in the new window:', url);
    } else {
        console.error('Failed to open new window.');
    }
}
