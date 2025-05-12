// Create the main box
const box = document.createElement('div');
box.style.width = '500px';
box.style.height = '600px';
box.style.backgroundColor = 'white';
box.style.border = '2px solid black';
box.style.display = 'flex';
box.style.flexDirection = 'column';
box.style.justifyContent = 'space-between';
box.style.alignItems = 'center'; // Changed from 'relative' to 'center'
box.style.padding = '1em';
box.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
box.style.fontFamily = 'Arial, sans-serif';

// Create and style the top logo (KLH logo)
const logoContainer = document.createElement('div');
logoContainer.style.marginTop = '1em';

const logo = document.createElement('img');
logo.src = 'klhlogo.png';
logo.alt = 'KLH Logo';
logo.style.width = '200px';
logo.style.height = '90px';
logo.style.borderRadius = '8px';
logo.style.border = '2px solid white';

logoContainer.appendChild(logo);

// Create and style the heading paragraph
const paragraph = document.createElement('p');
paragraph.textContent = "STUDENT ID CARD";
paragraph.style.textAlign = 'center';
paragraph.style.fontWeight = 'bold';
paragraph.style.fontSize = '20px';
paragraph.style.margin = '1em 0';

// Create and style the student image
const photoContainer = document.createElement('div');

const photo = document.createElement('img');
photo.src = 'photo.jpg';
photo.alt = 'Student Photo';
photo.style.width = '150px';
photo.style.height = '150px';
photo.style.borderRadius = '8px';
photo.style.border = '2px solid black';

photoContainer.appendChild(photo);

// Create and style the student name
const nameContainer = document.createElement('div');
nameContainer.textContent = 'NALLURI TULASI';
nameContainer.style.fontSize = '18px';
nameContainer.style.fontWeight = '600';
nameContainer.style.margin = '1em 0';

// Append all elements to the box
box.appendChild(logoContainer);
box.appendChild(paragraph);
box.appendChild(photoContainer);
box.appendChild(nameContainer);

// Append the box to the page
document.body.appendChild(box);
