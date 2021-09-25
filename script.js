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
    console.log(time)
    console.log(value)
    localStorage.setItem(time, value);

    $('.notification').addClass('show');

    setTimeout(function() {
      $('.notification').removeClass('show');
    }, 6000);
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

  var interval = setInterval(hourUpdater,18000);
  $('#9am .description').val(localStorage.getItem)('9am');
});