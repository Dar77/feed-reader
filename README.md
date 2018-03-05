### Frontend Nanodegree Project
___

# Feed Reader Project

For this project we were provided with a web based application that reads **RSS** feeds. We then needed to implement testing of the app using the [Jasmine](http://jasmine.github.io/) testing framework. The original developer had set up their initial test suite and we needed to complete this task by completing the tests listed in **overview** below.

This is a project from Udacity's **Frontend Nanodegree** [program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001).
___

Visit: [feed reader](http://www.it48.xyz/feed-reader)

![feed reader project](images/feed-reader-screen.png)

___


## Overview

### The required tests:

- Write a test that loops through each feed in the **allFeeds** object and ensures it has a **URL** defined and that the **URL** is not empty.
- Write a test that loops through each feed in the **allFeeds** object and ensures it has a name defined and that the name is not empty.
- Write a new test suite named "The menu".
- Write a test that ensures the menu element is hidden by default.
- Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
- Write a test suite named "Initial Entries".
- Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single **.entry** element within the **.feed** container.
- Write a test suite named "New Feed Selection".
- Write a test that ensures when a new feed is loaded by the **loadFeed** function that the content actually changes.

___


## Installation

To run the project please **fork** a copy to your **Git Hub** account and **clone** to your local machine with **Git**.

- Open **index.html** in the browser to view.
- The test suites and individual test results are listed at the bottom of page, or the failed tests are detailed.
- The actual tests are located in **jasmine/spec/feedreader.js**.

___


## Future Feature Tests

I've added tests for a feature that is not yet implemented in the application. This feature shows a 'tick' icon when the user selects a listed feed article. The ticks let them know which feed articles they have already viewed.

The icon could possibly be added to the page by appending a conditional ```<span class="icon icon-checkmark"></span> ``` to the **handlebars template** on click.

___


### Extra tests summary:

- Test that the check-mark icon is not visible by default when the feed first loads.
- Test that when a feed article is selected the check-mark icon is visible.

___


### The future feature test suite:

```javascript
    describe('Visited Icon', function() {

        beforeEach(function(done) { // pass done to the callback

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
```

- Both tests are marked as pending with 'xit'.
- If run, the first test will currently pass because the checkmark icon is already not defined.
- If run, the last test will fail because the feature is not yet implemented.

___