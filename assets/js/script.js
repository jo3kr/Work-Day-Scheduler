// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Display the current date in the header of the page
  $("#currentDay").text(dayjs().format("MMMM D, YYYY"));
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
   // Create time blocks for standard business hours (9AM - 5PM)
  for (let i = 9; i <= 17; i++) {
    const storedDescription = localStorage.getItem("hour-" + i);
    const timeBlock = $(`
      <div id="hour-${i}" class="row time-block">
        <div class="col-2 col-md-1 hour text-center py-3">${dayjs()
          .hour(i)
          .format("hA")}</div>
        <textarea class="col-8 col-md-10 description" rows="3">${
          storedDescription ? storedDescription : " "
        }</textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
    `);
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
        // Color code time blocks based on past, present, or future
        const currentHour = dayjs().hour();
        if (i < currentHour) {
          timeBlock.addClass("past");
        } else if (i === currentHour) {
          timeBlock.addClass("present");
        } else {
          timeBlock.addClass("future");
        }
    
        $(".container-lg").append(timeBlock);
      }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  }
});
