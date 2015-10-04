# My Recipe app.

I'm very happy with the outcome of this project. I feel like I learned a lot. I learned a lot while builing this app. There are things I liked that I did, and things that I will do differently in my next app. 

Throughout the build of this project I was reading a lot about how to structure an angular app, like different methods of organizing and making use of reusable componements. 

If you have any questions, just ask!

## My Process

I'm using the MEAN stack for this project. Mongo DB as my data source/holder. Express for my backend API. Angular for the front end. Using NodeJS which is powering the express server and my Gulp setup for the front end.

When I go to start working on this process, I would open up three terminal windows, start my mongodb, my express server, and a server for the front end. 

1. Front End
2. Server
3. Mongo DB

You can [view the model](https://github.com/czaas/recipe-app/blob/master/server/models/recipe.js) and see exactly what I'm working with on each page. Either just the object, or an array of objects like this.

### Front End

I have 3 views:
- [Main feed](https://github.com/czaas/recipe-app/blob/master/public/views/index.html)
- [Add Recipe](https://github.com/czaas/recipe-app/blob/master/public/views/add-recipe.html)
- [View Recipe](https://github.com/czaas/recipe-app/blob/master/public/views/view-recipe.html)

#### Main Feed
The [main feed controller](https://github.com/czaas/recipe-app/blob/master/public/js/ctrls/index.js).

This view makes a request to my backend and asks for all the recipes and is returned objects which I just loop over and display.

#### Add Recipe
The [add recipe controller](https://github.com/czaas/recipe-app/blob/master/public/js/ctrls/add-recipe.js).

Self described page. A feature I felt was needed was the ability to be able to rearange and edit both the steps of the recipe, and the ingredients. I used angular-dragula module which was fairly easy to setup. 

#### View Recipe
The [view recipe controller](https://github.com/czaas/recipe-app/blob/master/public/js/ctrls/single-view.js).

This is where you land when you click a link from the main feed. Here you will see an individual recipe. On this page, there's also the ability to edit a recipe. 

Here I would've liked to make more reusable components. When the edit mode is active, it's essentially the same page as Add Recipe, the only real difference, when you save the controller makes a put request, instead of a post request. 

### Back End

My back end accepts 5 types of requests:

- /get-recipes
- /add-recipe
- /single-recipe
- /update-recipe
- /remove-recipe

These urls are routed using my [api.js](https://github.com/czaas/recipe-app/blob/master/server/controllers/api.js) file. 

#### /get-recipes
GET request 

Returns ALL recipes from the mongo db. 

#### /add-recipe
POST request

I send an object using my [recipe model](https://github.com/czaas/recipe-app/blob/master/server/models/recipe.js) to the db.

#### /single-recipe
GET request

I request a single object from my database using the _id attribute mongodb provides

#### /update-recipe
PUT request

I search for a specific object from mongo based on the _id attribute and update it.

#### /remove-recipe
DELETE request

Based on the _id I tell mongodb to remove the specifed object.