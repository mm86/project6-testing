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
        it('URLs are defined', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i]).toBeDefined();
                expect(allFeeds[i].url).not.toBe(null);
            }
        });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(null);
            }
        });


        /* Future Feature test for exceeds expectations category:
         * TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a date defined
         * and that the date is not empty.
         */
        it('dates are defined', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].date).toBeDefined();
                expect(allFeeds[i].date).not.toBe(null);
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
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu is toggled', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
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
        beforeEach(function(done){
            loadFeed(0,function(){
            done();
            });
        });

        it('feed consists at least of a single .entry element', function(done){
            expect($('.entry').length).toBeGreaterThan(0);
            done();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var initialFeed, newFeed;

        beforeEach(function(done){
            loadFeed(1,function(){
            initialFeed = $('.feed h2').html();
            done();
            });
        });

         beforeEach(function(done){
            loadFeed(2,function(){
            newFeed = $('.feed h2').html();
            done();
            });
        });
        
        it('content changes', function(done){
            expect(initialFeed).not.toBe(newFeed);
            done();     
        });
    });

    /* Extra test suite for exceeds expectations.
       TODO: Write a new test suite named "Feed Links" */
    describe('Feed Links', function() {
        /* TODO: Write a test that ensures that feeds are clickable
         * Remember, loadFeed() is asynchronous.
         */
        var randomFeed;
        var randomNumber = Math.floor(Math.random() * 11) + 0;
        var feedLength;
        beforeEach(function(done){
            loadFeed(2,function(){
            feedLength = $('.entry').length;
            randomNumber = Math.floor(Math.random() * feedLength) + 0;
            randomFeed = $('.feed a').eq(randomNumber).attr("href");
            done();
            });
        });
        
        it('are clickable', function(done){
            expect(randomFeed).not.toBe(undefined);
            done();
        });
    });


}());
