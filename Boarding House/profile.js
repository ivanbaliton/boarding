document.addEventListener('DOMContentLoaded', function() {
    // Load the saved profile image on the homepage
    const savedProfileImage = localStorage.getItem('profileImage');
    const topProfileImage = document.getElementById('topProfileImage');

    // If an image is saved in localStorage, update the profile picture on the homepage
    if (savedProfileImage) {
        topProfileImage.src = savedProfileImage;
    }

    // Redirect to the profile editing page when clicking the top-right profile picture
    if (topProfileImage) {
        topProfileImage.addEventListener('click', () => {
            window.location.href = 'profile.html';
        });
    }
});
