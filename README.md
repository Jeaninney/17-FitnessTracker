# 17-NoSQL - Fitness Tracker

This is a web application that is built to accept data and track daily workout information for a single user.

## Installation
            
To install necessary dependencies, run the following command: npm install

## User Story

AS a person who is interested in learning about the affects of exercise on my health
I WANT to be able to track the name, type, duration and distance for cardio or weight, sets and reps for resitance
SO THAT I can see all of my exercises grouped together for motivation to reach my goals.

## Acceptance Criteria

When the user loads the page, they are given the options to create a new workout or continue an existing working (if one was already started for the day) or view their statistics.

The user is able to:

- [x] Add exercises to a previous workout plan.
- [x] Add new exercises to a new workout plan.
- [x] View multiple the combined weight of multiple exercises on the `stats` page.

## Submission on BCS

- [x] Deployed successfully on Heroku with a MongoDB

## Work done for the assignment

I didn't make many changes to the starter code. I made some minor updates in the index.html to clarify the link to the stats page and moved it to the right in the navbar. 

I added the models folder to define the schema of the database/template for adding information. 

I added the routes folder which holds the api routes and the html routes. The api routes are the rules for getting data from the db to display it and retrieve info from the app to store it in the db. The html routes determine the pages that get loaded and how they are called.