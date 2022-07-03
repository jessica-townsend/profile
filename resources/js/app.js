document.getElementById('mobile-menu-link').addEventListener('click', function() {
  document.querySelector('body').classList.toggle('mobile-menu-open');
});

var dropdowns = document.querySelectorAll('.dropdown .dropdown-title');
for(var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener('click', function(e) {
    e.currentTarget.parentElement.classList.toggle('active');
  });
}

window.addEventListener('scroll', function() {
  scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  if(scrollTop > 0) {
    document.querySelector('body').classList.add('header-shrink');
  }
  else {
    document.querySelector('body').classList.remove('header-shrink');
  }
});

var repeatingInputAdd = document.querySelectorAll('form .add-inputs');
for(var i = 0; i < repeatingInputAdd.length; i++) {
  repeatingInputAdd[i].addEventListener('click', function(e) {
    var repeatContainer = e.currentTarget.previousElementSibling,
        repeatNum       = parseInt(repeatContainer.lastElementChild.getAttribute('repeat-num')) + 1,
        newInput        = '';
        
        
    newInput = '<div class="new-repeat" repeat-num="' + repeatNum + '"><div class="title-container"><h4>Junior Information</h4><span class="delete-input" onclick="removeInput(this)"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"/><path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z"/></svg>Delete</span></div><div class="input-group"><input placeholder="Junior Name" required aria-label="Junior 1 Name" type="text" name="junior-name[]"><input placeholder="Junior Age" required aria-label="Junior 1 Age" type="text" name="junior-age[]"></div><div class="input-group"><div class="radio-input"><p>Right or left handed?</p><label><input required checked type="radio" name="junior-handedness[' + repeatNum +']" value="Right"> Right</label><label><input required type="radio" name="junior-handedness[' + repeatNum +']" value="Left"> Left</label></div><div class="radio-input"><p>Do they have their own clubs?</p><label><input required checked type="radio" name="junior-clubs[' + repeatNum +']" value="Yes"> Yes</label><label><input required type="radio" name="junior-clubs[' + repeatNum +']" value="No"> No</label></div></div></div>';
    
    repeatContainer.insertAdjacentHTML( 'beforeend', newInput );

    if(repeatNum > 3) {
      repeatContainer.parentElement.querySelector('.add-inputs').remove();
    }
  });
}

var signUpButtons = document.querySelectorAll('[btn-type="sign-up"]');
for(var i = 0; i < signUpButtons.length; i++) {
  signUpButtons[i].addEventListener('click', function() {
    document.querySelector('body').classList.toggle('popup-open');
  });
}

function removeInput(el) {
  el.parentElement.parentElement.remove();
}
window.removeInput = removeInput;

function submitRegistration(e) {
  e.preventDefault();
}