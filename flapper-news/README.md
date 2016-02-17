# Flapper News using Angular.js & Rails

This a an application that uses an angular front-end with a rails back-end. I wanted to see how to approach this type of concept, as people have said it is harder to implement angular on top of a rails framework then it is to implement the angular front-end first and then incorporate a rails framework on top of it.

The basic concept of this application is that users can register and sign in with their own unique details, create their own posts with or without links to sites, posts can be up-voted by all users.
Once a post has been created a user can add a comment to the post and this also can be up-voted. All posts and comments are display with who creator of them was.

### Setup and using the application
---

Clone this repo onto your local machine:
`git clone https://github.com/richgeog/angular_rails_mix_up.git`

run `npm install` to load dependencies

run `bundle` to install gems

run `rake db:create` to create the database locally

followed by `rake db:migrate` to migrate the database schema to the database just created

Then `rails s` to start the server to run the application

Go to `http://localhost:3000/#/register` to run the application

### Niggles and Working progress
---

As the main purpose of this project was to understand how to implement an application like this, I have not TDD'd the code. Tests can be added now, but this is a bit backwards as to how I would normally do this.

I've changed the database to postgresql as I have used this perviously and haven't used sqlite3 before. I wanted to see that my tables and relationships in the database were correct, whilst also persisting the data. However I was unable to find how to do this using sqlite3 hence my change to postgresql.

##### What next
---

* When a user is logged in and signs out you can't register or sign in as another user without refreshing the page first.
* Users can down vote each comment and link.
* Users can only vote each comment or link once.
* Creators of posts and comments can delete only their own posts and comments.
* Display error handling to the user for forms.

