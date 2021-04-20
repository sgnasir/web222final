function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var lat = document.getElementById('lat');
  var lng = document.getElementById('lng');
  var error = document.getElementById('error');
  var error2 = document.getElementById('error2');
  var regex = /^[0-9]*$/;
  
  console.log('TODO - validate the longitude, latitude values before submitting');

  if(lat.value < -90 || lat.value > 90 || regex.test(lat.value) == false)
  {
    error.innerHTML=" must be a valid Latitude (-90 to 90)";
    error.style.visibility="visible";
    return false;  
  }else
  {
    error.style.visibility="hidden";
  }

  if (lng.value < -180 || lng.value > 180 || regex.test(lng.value) == false)
  {
    error2.innerHTML=" must be a valid Longitude (-180 to 180)";
    error2.style.visibility="visible";
    return false;
    
  }else
  {
    error2.style.visibility="hidden";
    
  }
  
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
