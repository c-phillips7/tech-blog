# tech blog (wip)

  An express.js app utilizing MVC paradigm to run a simple blog where users can log in to make blog posts, and comment on other's posts.

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Current Features](#current-features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  To use the app, first npm i to install dependencies.
  
  A functional mysql server is required to use this app, and the .env.EXAMPLE must be updated with the local username and password.

  Once MySQL is connected, use the schema.sql to create an empty tech_blog_db, then run the server.js to populate the models.

  As the app is not currently functional, seed data can be inserted via 'node seeds/index.js' for example posts.

  When this is all done, the server can be run using node.


  ## Usage 

  This app is incomplete, and as of now only has a log in framework, and very simple displays for the data taken from MySQL. The app does contain the necessary api routes to run, but the JavaScript to connect this to the HTML.

  The eventual usage will be for users to log in and be able to create an account. With that account they can create, edit or delete thier own blog posts, and comment on other people's posts.


## Current Features
Though not functional, this app does feature:

A functional database, with models for Users, blog Posts, and Comments.

A full controller system is functional with /api routes to handle all the get, put, post, and delete requests that would be necessary to run a blog.

Some simple html rendered using handlebar is present to display the connection between the server and html (if database is seeded).

The logic for user login and logout are present, and using session allows for html to be rendered based on if the user is logged in or not.
  ## Contributing

  Open source, feel free to use or edit as you like.

  ## Tests

  Server run on localhost using node.js to test.

  ## Questions

  - Check out my other repositories at [GitHub Profile](https://github.com/c-phillips7)

  - For any questions, contact me at cp.phillips15@gmail.com.
