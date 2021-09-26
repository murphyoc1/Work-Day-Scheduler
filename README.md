# Work-Day-Scheduler

This is the work day scheduler, picked up from someone who needed to work on other things

https://murphyoc1.github.io/Work-Day-Scheduler/

Above is the link to the finished product. 

What needed to happen first was making HTML updates to build out each of the blocks of time we would actually be using to have our scheduled events. The <textarea> element was used to hold our text given an id of event. The CSS identifiers were added later for our bootsrap callouts for formating. Each <div> for the hours we want in our scheduler were made from 9am to 6pm. The id needs to be an hour count up from 1 (12:01 AM) to 24 (11:01 pm). That needs to be a counter and it works with the currentDay id we have in the header. Each time slot has a save button that has its own id. 
  
The script needed a hour updater to decide what the color of the block would be for the time of day, and needed to be able to save to local storage. The jQuery code takes the on click listener for the save button made in the html to take the textarea element (.event) and saves the value and time to local storage which would be the user input schedule event, and the time which would be hour-* (* being 9-18). 
 
The hour updater function takes the time block hour 9-18 and compares it to the current time. It takes the current time block (this) and makes it gray if it is less than the current hour, red if it is the current hour, and green if it is anything else. 
  
Lastly the local storage needed to be pulled back into the document and that is where the local storage callouts are used. 
