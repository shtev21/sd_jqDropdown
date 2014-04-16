(function( $ ) {
 
    $.fn.ssDropDownMenu = function( options ) {
 
        var settings = $.extend({
            // These are the defaults.
            heading: '.select',
            list: 'ul',
            item: 'li',
            activeClass: 'selected',
            transitionSpeed: 200
        }, options );
 
        // Setting up some shorthands
        var $parent = this;
        var $heading = $parent.find(settings.heading);
        var $menu = $parent.find(settings.list)
        var defaultVal = $parent.find('.' + settings.activeClass).text()

        // Creating a hidden input field, useful for form submission
        var $hiddenInput = $('<input type="hidden" value="' + defaultVal + '" >')        
 
        // Initialising the menus
        $menu.hide()
        $heading.text(defaultVal)
 
        // Hides the menu when it loses focus
        $(document).mouseup(function (e) {
            if (!$parent.is(e.target) && $parent.has(e.target).length === 0) {
                $menu.slideUp(settings.transitionSpeed);
            }
        });
 
        // Toggles the menu when clicking on the heading
        $parent.on('click', settings.heading, function(){
            $menu.slideToggle(settings.transitionSpeed);
        });
 
        // Changes the value of the heading and closes the menu on click of an item
        $menu.on('click', settings.item, function(){
            var newVal = $(this).text()
            var $currentItem = $(this)

            // Make the previous active item inactive
            $menu.find('.' + settings.activeClass).removeClass(settings.activeClass)

            // Update the heading text and the hidden input values
            $heading.text(newVal)
            $parent.find($hiddenInput).attr('value', newVal)

            // Slide transition and then add the active class to the current active item
            $menu.slideUp(settings.transitionSpeed, function(){
                $currentItem.addClass(settings.activeClass)
            })
        })

        $parent.append($hiddenInput)
 
        // Chainable function baby!
        return this;
 
    }
 
}( jQuery ));
 
$('.selectBox').ssDropDownMenu();