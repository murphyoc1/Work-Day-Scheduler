$(document).ready(function() {
// save button
  $('.saveBtn').on('click', function() {
    var value = $(this)
      .siblings('.event')
      .val();
    // adding task from the class event in textbox in html to local storage
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

  // take from local storage and display back in the textbox

  $('#hour-9 .event').val(localStorage.getItem('hour-9'));
  $('#hour-10 .event').val(localStorage.getItem('hour-10'));
  $('#hour-11 .event').val(localStorage.getItem('hour-11'));
  $('#hour-12 .event').val(localStorage.getItem('hour-12'));
  $('#hour-13 .event').val(localStorage.getItem('hour-13'));
  $('#hour-14 .event').val(localStorage.getItem('hour-14'));
  $('#hour-15 .event').val(localStorage.getItem('hour-15'));
  $('#hour-16 .event').val(localStorage.getItem('hour-16'));
  $('#hour-17 .event').val(localStorage.getItem('hour-17'));
  $('#hour-18 .event').val(localStorage.getItem('hour-18'));

  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});