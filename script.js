$(document).ready(function() {
// save button
  $('.saveBtn').on('click', function() {
    var task = $(this)
      .siblings('.description')
      .val();
    // adding task from the class description in textbox in html to local storage
    var time = $(this)
      .parent()
      .attr('id');
    localStorage.setItem(time, task);

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


});