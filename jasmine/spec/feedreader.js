/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {

            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all have a url', function() {

            var url;
            for (var i = 0; i < allFeeds.length; i++) { // loop through allFeeds
                url = allFeeds[i].url;
                expect(url).toBeDefined(); // check the url is defined
                expect(url).not.toBe(''); // check the the url is not empty
            }
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all have a name defined', function() {

            var name;
            for (var i = 0; i < allFeeds.length; i++) { // loop through allFeeds
                name = allFeeds[i].name;
                expect(name).toBeDefined(); // check the name is defined
                expect(name).not.toBe(''); // check the name is not empty
            }
        });
    });


    /* A new test suite */
    describe('The menu', function() {
        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {

            menuHidden = $('body').hasClass('menu-hidden'); // check if body has class of menu-hidden to hide menu
            expect(menuHidden).toEqual(true); // expect this to be true
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('visibility is toggled when menu is clicked', function() {

            var menuTrigger = $('.menu-icon-link'); // the menu icon element for click event
            menuTrigger.click(); // trigger the menu
            var showMenu = $('body').hasClass('menu-hidden'); // see if the body still has a class of menu-hidden after click event
            expect(showMenu).toEqual(false); // on first click of menu icon showMenu should equal false - making the menu visible

            menuTrigger.click(); // trigger the menu second time
            var hideMenu = $('body').hasClass('menu-hidden'); // see if the body has a class of menu-hidden after click event
            expect(hideMenu).toEqual(true); // on second click of menu icon showMenu should equal true - making the menu hidden
        });
    });

    /* A new test suite */
    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) { // pass done as an argument

            loadFeed(2, done); // call loadFeed function
        });

        it('has at least one .entry element in the .feed container', function() {

            expect($('.feed .entry').length).not.toBe(0); // checks the number of .entry class, entries in the .feed container is more than 0
        });
    });

    /* A new test suite */
    describe('New Feed Selection', function() {
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */
        var resultsArray = [];
        beforeEach(function(done) { // pass done as an argument

            loadFeed(1, function() { // load feed[1]

                var content = $('.feed').text(); // the text from feed[1]
                resultsArray.push(content); // add this to the results array
                loadFeed(3, done); // load feed[3]
            });
        });

        it('loads new content when a new feed is selected', function() {

            contentTwo = $('.feed').text(); // the text from feed[3]
            resultsArray.push(contentTwo); // add this to the results array
            expect(resultsArray[0]).not.toEqual(resultsArray[1]); // compare the text from the two different feeds, expect them to be different
        });
    });

    // Tests for future feature
    // Specs are marked pending - to be added
    // This feature will add a tick icon to show the user has visited a feed article in the list.
    describe('Visited Icon', function() {

        beforeEach(function(done) { // pass done as an argument

            loadFeed(1, done); // call loadFeed function - load a different feed
        });

        /* Test to check there is no visited icon (check-mark tick) visible by default when the feed first loads*/
        xit('does not show by default', function() { // marked 'xit' as a pending test

            var checkIcon = $('article').hasClass('icon-checkmark'); // try to find a .icon-checkmark, which is a tick
            expect(checkIcon).not.toEqual(true); // expect on first loading a feed not to find it
        });

        /* Test to check visited icon shows when feed article is clicked and visited*/
        xit('shows after feed article has been visited', function() { // marked 'xit' as a pending test

            var selected = $('.entry-link').first(); // the first list item from the feed-list
            selected.click(); // select - 'click' the first item. This should show the check icon
            var showCheckIcon = $('article').hasClass('icon-checkmark'); // try to find a .icon-checkmark
            expect(showCheckIcon).toEqual(true); // expect this to be true - the check icon is visible showing the feed article has been visited by the user.
        });
    });
}());
