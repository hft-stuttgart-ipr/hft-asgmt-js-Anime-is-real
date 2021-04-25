$(document).ready(() => {
  // DOMContent is loaded, now we can start checking HTML Elements
  // If we dont "wait" for document to be ready, we cannot access HTML elements
  // for testing purposes, you can use a "debugger;" statement or also "console.log(element)"
  console.log("DOM is ready!");

  const form = $('#hft-shoutbox-form');
  const alertBox = $('#hft-shoutbox-alert');

  form.on('keyup', (event) => {
    const formData = new FormData(event.currentTarget);
    const usernameLength = formData.get("username").length;
    const messageLength = formData.get("message").length;
    const submitButton = document.getElementById('hft-shoutbox-form-submit');

    console.log(usernameLength, messageLength, usernameLength < 3, messageLength < 10);
    if (usernameLength < 3 || messageLength < 10) {
      alertBox.removeClass("d-none");
      submitButton.setAttribute('disabled','disabled');
    } else {
      alertBox.addClass("d-none");
      submitButton.removeAttribute('disabled');
    }
  })
});