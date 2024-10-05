# **Commenting guidelines**
<!-- So, this is just a bare frame I made (9/30/24) for adding comments to your HTML files when you add / modify them. -->

<!-- *** -->





***
# Pre-info
These guidelines do not have to be applied to everything. For example, setting a variable does not need to be commented (unless you need to explain why its being set to something). 





***
# General commenting
When commenting, you should make line breaks when the line starts to get too long horizontally.
For example, here is an example of what you should not do:

    // I am typing a really long comment right now. This is the most eloquent and descriptive comment to ever exist. It spans entire universes and worlds.

Instead, here is what you should do:
    
    // This is a really long comment, too! However, you see,
    // I am breaking my comments into multiple lines to make it look cleaner,
    // and better!

Also, you should try to link sources above code taken from them so that others can trace the code back to its source, which helps make the code maintainable in the future.





***
# HTML-specific commenting
For HTML, comments should generally look like this:

    <!-- 
    blah blah blah blah balh
    -->

However in each HTML files, the following should at the least have the following comments. More can be added to the files in addition to this, but this is the baseline for the comments.




**Head**

        <!--
        things that link to different files
        such as CSS or Javascript
        The page title (that you see on the top of the tab) and the image displayed
        is also assigned here.
        -->





**Header**

        <!-- 
        there is javascript (in /shared/JS/script.js) that injects a header
        that is used on every page. this header includes:
        - the dropdown menu,
        - links to pages on top bar
        - beavertronics icon 
        - beavertronics title
        -->





**Body**

        <!-- 
        this is the main body that contains everything 
        -->





**Footer**

        <!-- 
        similar to above with the header, there is Javascript that injects a universal footer
        this footer includes:
        - links to socials
        - link to Dr. Meirings email
        - access to credits page
        - access to feedback page
        - access to old website
        -->





***
# Javascript-specific commenting
For javascript, comments should generally look like this:

    // this variable contains a number
    // woah!
    let a = 0;

    // this function does something
    // thats amazing!
    function do_something() {
        something
    }





***
# CSS-specific-commenting
I'll get there eventually...