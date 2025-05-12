// Create the div element
const box = document.createElement('div');

// Style the box
box.style.width = '500px';
box.style.height = '600px';
box.style.backgroundColor = 'white';
box.style.border = '2px solid black';
box.style.display = 'flex'; // Use flexbox for positioning flexibility
box.style.flexDirection = 'column'; // Arrange items vertically
box.style.justifyContent = 'space-between'; // Space items evenly
box.style.alignItems = 'relative'; // Align items to the center
box.style.padding = '1em';



// Create a container for the first image
const firstImageContainer = document.createElement('div');
firstImageContainer.style.marginBottom = '1em'; // Adjust margin or other styles as needed

// Create the first image element
const firstImage = document.createElement('img');
firstImage.src = 'photo.jpg'; // Replace with your image URL
firstImage.alt = 'Student Photo 1';
firstImage.style.width = '150px'; // Adjust the width as desired
firstImage.style.height = '150px'; // Adjust the height as desired
firstImage.style.borderRadius = '8px'; // Adjust border radius as desired
firstImage.style.border = '2px solid white';

// Append the first image to its container
firstImageContainer.appendChild(firstImage);

const contentContainer = document.createElement('div');
contentContainer.textContent='NALLURI TULASI';
contentContainer.style.display = 'flex'; // Use flexbox for inner layout
contentContainer.style.alignItems = 'center';



// Create a container for the second image
const secondImageContainer = document.createElement('div');
secondImageContainer.style.marginTopp = '1em'; // Adjust margin or other styles as needed

// Create the second image element
const secondImage = document.createElement('img');
secondImage.src = 'klhlogo.png'; // Replace with your image URL
secondImage.alt = 'Student Photo 2';
secondImage.style.width = '200px'; // Adjust the width as desired
secondImage.style.height = '90px'; // Adjust the height as desired
secondImage.style.borderRadius = '8px'; // Adjust border radius as desired
secondImage.style.border = '2px solid white';

// Append the second image to its container
secondImageContainer.appendChild(secondImage);

// Append the paragraph and image containers to the box
box.appendChild(secondImageContainer);
box.appendChild(paragraph)
box.appendChild(firstImageContainer);


// Add the box to the page
document.body.appendChild(box);
