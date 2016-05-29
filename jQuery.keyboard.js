(function($) {

  $.keyboard = {
    /**
     * Metoda .on() rozsiruje jQuery.on() o sadu klavesovych zkratek
     * @param {string} eventName - String zachytavane klavesove kombinace.
     * @param {function} callback - Funkce ktera bude zavolana po zachyceni klavesove zkratky
     * @param {boolean} preventDefault - Pokud je true zamezi se puvodni event // napriklad CTRL+C
     * @memberof UI.keyboard
     * @see Pozor na poradi zapisu klavesove zkratky !! CTRL ALT SHIFT !!
     */
    on: function(eventName, callback, preventDefault) {

      $(document).on("keydown", function(e) {
      // Declare and prepare code
      var ctrl    = (e.ctrlKey) ? "CTRL+" : "",
          alt     = (e.altKey) ? "ALT+" : "",
          shift   = (e.shiftKey) ? "SHIFT+" : "",
          keycode = e.which,
          
          firedEventName = ctrl + alt + shift + keycode;
        
        // prevent default
        if (eventName === firedEventName) {
          if (preventDefault) {
            e.preventDefault();
          }
          callback();
        }


        



      });

    }
  };

}(jQuery));