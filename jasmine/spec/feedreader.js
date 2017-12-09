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

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all have a url', function() {
            var url;
            for (var i = 0; i < allFeeds.length; i++) { // loop through allFeeds
                url = allFeeds[i].url;
                expect(url).toBeDefined();
                expect(url).not.toBe('');
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all have a name defined', function() {
            var name;
            for (var i = 0; i < allFeeds.length; i++) { // loop through allFeeds
                name = allFeeds[i].name;
                expect(name).toBeDefined();
                expect(name).not.toBe('');
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            menuHidden = $('body').hasClass('menu-hidden'); // check if body has class of menu-hidden to hide menu
            expect(menuHidden).toEqual(true);
        });

         /* TODO: Write a test that ensures the menu changes
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

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) { // pass done to the callback
            loadFeed(2, done); // call loadFeed function
        });

        it('has at least one .entry element in the .feed container', function(done) {

            expect($('.entry').length).not.toBe(0); // checks number of entries (.entry class) is more than 0
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var resultsArray = [];
        beforeEach(function(done) { // pass done to the callback
            var content = $('a .entry h2').text(); // the text from the first feed is loaded
            resultsArray.push(content); // add this to the results array
            loadFeed(3, done); // call loadFeed function - load a different feed
        });

        it('loads new content when a new feed is selected', function(done) {

            contentTwo = $('a .entry h2').text(); // the text from the second feed is loaded
            resultsArray.push(contentTwo); // add this to the results array
            expect(resultsArray[0]).not.toEqual(resultsArray[1]); // compare the text from the two different feeds, expect them not to be different
            done();
        });
    });

}());
