// window.addEventListener('load', () => {
//     const animation = document.getElementById('animation');
//     const welcomeMessage = document.getElementById('welcome-message');
//     const mainContent = document.getElementById('main-content');

//     // Step 1: End plane animation
//     setTimeout(() => {
//         welcomeMessage.classList.add('show');
//     }, 500); // Plane animation duration

//     // Step 2: Fade out welcome message
//     setTimeout(() => {
//         welcomeMessage.classList.remove('show');
//     }, 5000); // Duration to show welcome message

//     // Step 3: Hide animation container and show main content
//     setTimeout(() => {
//         animation.style.display = 'none';
//         mainContent.classList.add('visible');
//         document.body.style.overflow = 'auto';
//     }, 3000); // Total delay before showing main content
// });