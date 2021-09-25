$(document).ready(function() {
// save button
  $('.saveBtn').on('click', function() {
    var value = $(this)
      .siblings('.description')
      .val();
    // adding task from the class description in textbox in html to local storage
    var time = $(this)
      .parent()
      .attr('id');

    localStorage.setItem(time, value);

    $('.notification').addClass('show');

    setTimeout(function() {
      $('.notification').removeClass('show');
    }, 5000);
  });

  function hourUpdater() {
    var currentHour = moment().hours();

    $('.time-block').each(function() {
      var blockHour = parseInt(
        $(this)
          .attr('id')
          .split('-')[1]
      );
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  hourUpdater();

  var interval = setInterval(hourUpdater,15000);

  //$('#currentDay').text(moment().format('dddd, MMMM Do'));
  // take from local storage and display back in the textbox

  $('#9am .description').val(localStorage.getItem('9am'));
  $('#10am .description').val(localStorage.getItem('10am'));
  $('#11am .description').val(localStorage.getItem('11am'));
  $('#12am .description').val(localStorage.getItem('12am'));
  $('#1pm .description').val(localStorage.getItem('1pm'));
  $('#2pm .description').val(localStorage.getItem('2pm'));
  $('#3pm .description').val(localStorage.getItem('3pm'));
  $('#4pm .description').val(localStorage.getItem('4pm'));
  $('#5pm .description').val(localStorage.getItem('5pm'));
  $('#6pm .description').val(localStorage.getItem('6pm'));

  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});