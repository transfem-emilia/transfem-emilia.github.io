// Array of profile picture file names
const profilePictures = [
    'PROFILE PICTURE PINK.jpg',
    'PROFILE PICTURE AROACE.png',
    'PROFILE PICTURE DEMIGIRL.png',
    'PROFILE PICTURE PRIDE PROGRESS INTERSEX.png'
];

// Function to get a random picture from the array
function getRandomProfilePicture() {
    const randomIndex = Math.floor(Math.random() * profilePictures.length);
    return profilePictures[randomIndex];
}

// Set the src attribute to a random profile picture
document.getElementById('profile-pic').src = getRandomProfilePicture();