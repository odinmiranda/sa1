const resumeContainer = document.querySelector('.resume-container');
const colorChangeBtn = document.querySelector('#colorChangeBtn');
const profilePic = document.querySelector('.profile-pic');

const colors = ['#f4f4f9', '#e8f0fe', '#fff8e1', '#e3fcec', '#ffe5e5'];
let colorIndex = 0;

colorChangeBtn.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length; // this cycles through colors
  resumeContainer.style.backgroundColor = colors[colorIndex];
  profilePic.style.borderColor = colors[colorIndex]; 
});

