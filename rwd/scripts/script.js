$(document).ready(function() {
   
   $(function() {
      var icons = {
            header: "info-accordian-icon",
            activeHeader: "info-accordian-icon"
          };
      $( "#accordion" ).accordion({
         collapsible: true,
         icons: icons,
         heightStyle: "content",
         active: false
      });
    
    });
   
   var $frame = $('.frame');
   var $wrap  = $frame.parent();
   $frame.sly({
      horizontal: 1,
      
      itemNav: 'forceCentered',
      smart: 1,
      activateOn: 'click',
      
      scrollBy: 1,
      
      mouseDragging: 1,
      swingSpeed: 0.2,
      
      scrollBar: $('.scrollbar'),
      dragHandle: 1,
      
      speed: 600,
      startAt: 0,
      
      // Buttons
      forward: $wrap.find('.forward'),
      backward: $wrap.find('.backward'),
      //prev: $wrap.find('.prev'),
      //next: $wrap.find('.next')
   });
   
   $('#calendar').fullCalendar({
      //googleCalendarApiKey: 'AIzaSyAq2Plu4Eg9N2ZC2jeI5ONFMHqdPaZhs3c',
      googleCalendarApiKey: 'AIzaSyAsk3WNuNzqvIN1Ut3V2CJgKm6rwHph02c',
      
      header: {
         left: 'prev,next today',
         center:'title',
         right: 'month,basicWeek,basicDay'
      }
   });
   
   var all_src = {
         googleCalendarId: '3fb19mis9iautvhv0cn28mb1hbnroger@import.calendar.google.com',
         className: 'all',
         color: 'yellow',   // an option!
         textColor: 'black' // an option! 
   };
   
   var greyhound_src = {
         googleCalendarId: '9uastoakokkekmm3lmbm0hg0mddqa16i@import.calendar.google.com',
         className: 'greyhound',
         color: 'red',   // an option!
         textColor: 'black' // an option!
   };
   
   var thoroughbred_src = {
         googleCalendarId: 'atho0s2fuk2jis6a879nu5rilhhcc19v@import.calendar.google.com',
         className: 'thoroughbred',
         color: 'blue',   // an option!
         textColor: 'black' // an option! 
   };
   
   var harness_src = {
         googleCalendarId: 'pal9c1bbgtgv2o7a57iuipsonu7qqhm2@import.calendar.google.com',
         className: 'harness',
         color: 'green',   // an option!
         textColor: 'black' // an option! 
   };
   
   // Default to all calendar
   switchCalendar('all');
   
   // switch calendar
   function switchCalendar(calType) {
      
      console.log('Switching to Calendar:' + calType);
      if (calType == 'all') {
         $('#calendar').fullCalendar( 'addEventSource', all_src);
         $('#calendar').fullCalendar( 'removeEventSource', greyhound_src);
         $('#calendar').fullCalendar( 'removeEventSource', thoroughbred_src);
         $('#calendar').fullCalendar( 'removeEventSource', harness_src);
         $('.subscribe_button').text('Subscribe All');
         $('.subscribe_button').attr('href', 'webcal://static.tab.co.nz/content/k2/racingcalendar.ics');      
      }
      else if (calType == 'greyhound') {
         $('#calendar').fullCalendar( 'addEventSource', greyhound_src);
         $('#calendar').fullCalendar( 'removeEventSource', all_src);
         $('#calendar').fullCalendar( 'removeEventSource', thoroughbred_src);
         $('#calendar').fullCalendar( 'removeEventSource', harness_src);
         $('.subscribe_button').text('Subscribe Greyhound');
         $('.subscribe_button').attr('href', 'webcal://static.tab.co.nz/content/k2/Greyhounds_Racing.ics');
      }
      else if (calType == 'thoroughbred') {
         $('#calendar').fullCalendar( 'addEventSource', thoroughbred_src);
         $('#calendar').fullCalendar( 'removeEventSource', all_src);
         $('#calendar').fullCalendar( 'removeEventSource', greyhound_src);     
         $('#calendar').fullCalendar( 'removeEventSource', harness_src);
         $('.subscribe_button').text('Subscribe Thoroughbred');
         $('.subscribe_button').attr('href', 'webcal://static.tab.co.nz/content/k2/Thoroughbred_Racing.ics');
      }
      else if (calType == 'harness') {
         $('#calendar').fullCalendar( 'addEventSource', harness_src);
         $('#calendar').fullCalendar( 'removeEventSource', greyhound_src);
         $('#calendar').fullCalendar( 'removeEventSource', all_src);
         $('#calendar').fullCalendar( 'removeEventSource', thoroughbred_src);
         $('.subscribe_button').text('Subscribe Harness');
         $('.subscribe_button').attr('href', 'webcal://static.tab.co.nz/content/k2/Harness_Racing.ics');
      }
   }
   
  // Calendar selection
   
  $("#frame .all").unbind("click").click(function() {     
     switchCalendar($(this).attr('class'));
  });
  
  $("#frame .greyhound").unbind("click").click(function() {
     switchCalendar($(this).attr('class'));
  });
  
  $("#frame .harness").unbind("click").click(function() {     
     switchCalendar($(this).attr('class'));
  });
  
  $("#frame .thoroughbred").unbind("click").click(function() {            
     switchCalendar($(this).attr('class'));
  });

  // end calendar selection
  
  
});