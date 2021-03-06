<h1>Project Overview</h1>

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included Jasmine and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

<h3>How to run this Project?</h3>

Download or clone this repository. Open the index.html to run the application. To inspect the JavaScript code for the app, open js/app.js. To inspect the tests, open jasmine/spec/feedreader.js 

<h3>What are the tests covered for this project?</h3>

1. Test suite 'Future Feature' checks if there is a date property in the allFeeds object. The dates property displays the time and day of the year the article was published.
2. Test suite 'RSS Feeds' checks if the name, url and date properties of the allFeeds object are defined and not empty.
3. Test suite 'The menu' checks if the menu is hidden by default and the menu changes visibility when the menu icon is clicked.
4. Test suite 'Initial Entries' ensures that there exists at least one .entry element within the .feed container when the loadFeed function is called. Since loadFeed() is asynchronous, Jasmine's beforeEach and done() functions are used.
5. Test suite 'New Feed Selection' checks if the content actually changes when a new feed is loaded by the loadFeed function.

<h3>Extra tests for exceeds expectations:</h3>

1. Test suite 'RSS Feeds' also checks if the date property(future feature) of the allFeeds object are defined and not empty.
2. Test suite 'Feed Links' checks if the feeds are clickable. For testing purpose and efficiency, a random feed is chosen.

<h3>Why this Project?</h3>

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

<h3>What will I learn?</h3>

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

<h3>How will this help my career?</h3>

Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

