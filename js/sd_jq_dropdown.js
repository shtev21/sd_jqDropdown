(function( $ ) {
 
    $.fn.sdDropdown = function( options ) {
 
        var settings = $.extend({
            // These are the defaults.
            heading: '.select',
            list: 'ul',
            item: 'li',
            activeClass: 'selected',
            speed: 200,
            mode: 'dropDown',
            easing: 'swing'
        }, options );
 
        // Setting up some shorthands
        var $parent = this;
        var $heading = $parent.find(settings.heading);
        var $menu = $parent.find(settings.list);

        //  Defaults for text and value
        var defaultTxt = $parent.find('.' + settings.activeClass).text();
        var defaultVal = $parent.find('.' + settings.activeClass).attr('data-value');

        //  Animation style, default is dropdown popUp available
        var cssPosition = settings.mode == 'popUp' ? 'bottom' : 'top';

        //  Building an object for the menu css
        var menuStyles = {};

        //  Fleshing out the array for the menu css
        menuStyles['position']  = 'absolute';
        menuStyles['overflow']  = 'hidden';
        menuStyles['width'] = $heading.innerWidth();

        // Here is where we set the top or bottom property
        menuStyles[cssPosition] = $heading.outerHeight();

        // Creating a hidden input field, useful for form submission
        var hiddenEl = document.createElement('input');
        $(hiddenEl).attr('type', 'hidden');
        $(hiddenEl).val(defaultVal);

        // Add important inline styles
        $parent.css({
            position: 'relative'
        })

        $menu.css(menuStyles);
 
        // Initialising the menus
        $menu.hide();
        $heading.text(defaultTxt);
 
        // Hides the menu when it loses focus
        $(document).mouseup(function (e) {
            if (!$parent.is(e.target) && $parent.has(e.target).length === 0) {
                $menu.slideUp(settings.speed);
            }
        });
 
        // Toggles the menu when clicking on the heading
        $parent.on('click', settings.heading, function(){
            $menu.slideToggle(settings.speed, settings.easing);
        });
 
        // Changes the value of the heading and closes the menu on click of an item
        $menu.on('click', settings.item, function(){
            var newTxt = $(this).text();
            var newVal = $(this).attr('data-value')
            var $currentItem = $(this)

            // Make the previous active item inactive
            $menu.find('.' + settings.activeClass).removeClass(settings.activeClass)

            // Update the heading text and the hidden input values
            $heading.text(newTxt)
            $(hiddenEl).attr('value',newVal);

            // Slide transition and then add the active class to the current active item
            $menu.slideUp(settings.speed, settings.easing, function(){
                $currentItem.addClass(settings.activeClass)
            })
        })

        $parent.append(hiddenEl)
 
        // Chainable function baby!
        return this;
 
    }
 
}( jQuery ));
 
$('.selectBox').sdDropdown();