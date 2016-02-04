/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {

    /* Exceeds Expectations: Test suite "Future Feature" - this suite tests the workings 
     * of a future feature 'dates'. Dates property represents the day and 
     * time the article was published.
     */
    describe('Future feature', function() {
        /* Spec loops through the allFeeds object and 
         * checks to see if the dates are of the correct format.
         */
        it('dates property displays date and time', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].date).toBeDate();
            }
        });
    });


    /* Test suite 'RSS Feeds' - this suite contains tests related to the RSS Feeds properties
     * namely, URL, name and date. 
     */
    describe('RSS Feeds', function() {
        /* Spec 'allFeeds are defined' checks to see if the allFeeds object 
         * is defined and not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Spec 'URLs are defined' loops through the allFeeds object and 
         * checks to make sure the URL's are defined and not empty.
         */
        it('URLs are defined', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        /* Spec 'names are defined' loops through the allFeeds object and 
         * checks to make sure the names are defined and not empty.
         */
        it('names are defined', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });


        /* Spec 'dates are defined' loops through the allFeeds object and 
         * checks to make sure the dates are defined and not empty.
         */
        it('dates are defined', function(){
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].date).toBeDefined();
                expect(allFeeds[i].date).not.toBe('');
            }
        });


    });


    /* Test suite "The menu" - this suite tests the workings of the menu icon and list
     */
    describe('The menu', function() {

        /* spec 'is hidden by default' ensures the menu element is
         * hidden by default. 
         */
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
          
        /* this test checks to see if the menu's visibility changes
         * when the menu icon is clicked.
         */
        it('changes visibility when the menu is toggled', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    /* Test suite "Initial Entries" - tests for the feed entries */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('feed consists at least of a single .entry element', function(done){
            expect($('.entry').length).toBeGreaterThan(0);
            done();
        });
    });
    /* Test suite "New Feed Selection" - tests for the feeds changing */
    describe('New Feed Selection', function() {
        /* test checks to see if the feed changes when a new feed is
         * loaded. since loadFeed() is asynchronous, we will be using
         * beforeEach and done() functions.
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

    /* Extra test suite
     * Test suite "Feed Links" - tests to make sure the feeds are clickable
     * by generating a random number and checking a random feed's attr attribute.
     */
    describe('Feed Links', function() {

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
