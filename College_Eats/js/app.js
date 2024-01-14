const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if(element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }
  
  const links = getElement('.nav-links')
  const navBtnDOM = getElement('.nav-btn')
  
  navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })
//retrives current year for copyright
  const date = getElement('#date');
  const currentYear = new Date().getFullYear()
  date.textContent = currentYear
  
// function for validating the contact page form if all values except phone are filled pass to thank you page else does not validate

function validateForm(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;


if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
  alert('Please fill in all required fields.');
  return false;
}
var confirmation = confirm("Are you sure you want to submit the form?");
if (confirmation) {
  return true;
}
return false;
}

//Image enlargemnt
const recipeImages = document.querySelectorAll('.recipe-img');

// Loop through each image element
recipeImages.forEach(image => {
  // Add an event listener for the 'mouseover' event
  image.addEventListener('mouseover', () => {
    // Enlarge the image when hovered
    image.style.transform = 'scale(1.05)';
  });
  // Add an event listener for the 'mouseout' event
  image.addEventListener('mouseout', () => {
    // Shrink the image back to its original size when not hovered
    image.style.transform = 'scale(1)';
  });
});





