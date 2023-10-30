create new file called "rest-rant"
create "index.js" and "package.json"
in code index.js "create app.get" and "app.listen"
Create a file called ".gitignore"
In the .gitignore file, add the text "node_modules", ".env" and ".DS_Store"
setup github
Run the command "git init" on your terminal
Run the command git add .
Run the command git commit -m "Initial commit"
Open your internet browser and go to GitHub
make a new repository
Name your repository project-REST-rant
run the command git remote add origin [your link here]
Run the command git push origin master
Create a .env file
inside .env file code "PORT=3000"
Run the command npm i dotenv in terminal
in index.js file and add require('dotenv').config() to the top
Change app.listen(3000) to app.listen(process.env.PORT)
make a 404 route
in index.js create "app.get('\*', (req, res) => {})"
inside the app.get function above set your res.send() content to an "h1" tag with the text "404 Page"
call status(404) and place it in between "res." and ".send()"
do another git commit
run git add .
run git commit -m "Adding 404 page route"
run git push origin master
Create a new folder called "controllers"
In the controllers folder, create a file called "places.js"
In the places.js file, add code to create and export an express.Router()
in index.js create "app.use()"
inside the "app.use()" type "'/places', require('./controllers/places')"
in places.js create "router.get()"
inside "router.get()" create an arrow function "'/', (req, res) => {}"
inside the function above make a res.send()
inside res.send() put "'GET /places'"
do another commit
run git add .
run git commit -m "Adding places controller"
run git push origin master
Run the nodemon in the terminal
see if "http://localhost:3000" says "Hello world!"
see if "http://localhost:3000/places" says "GET /places"
see if "http://localhost:3000/not-a-defined-route" says "404 Page"
Open Postman program and select create a request
Open a new request in Postman and type in http://localhost:3000
then press the send button
add commit
run git add .
run git commit -m "Adding remaining stub routes"
run git push origin master
add new places page
in index.js create another app.get()
inside the new app.get() add '/places/new' and '(res, req)'
create an arrow function with 'res.send()' inside
run the command "npm i react express-react-views" on the terminal
Create a "views" folder inside the the rest-rant
inside the views folder create a new file called "default.jsx"
inside "default.jsx" create a 'require react' and a new function called "Def"
add commit
run git add .
run git commit -m "Adding default view for layout"
run git push origin master
inside "views" folder create a new file called "home.jsx"
inside "home.jsx" import React and the Def function using "require('react')" and "require('./default')"
make a new function called "home"
place a "Def", "main" and "h1" tag inside the "home" function
inside the "h1" type "home"
add commit
run git add .
run git commit -m "Adding home page view"
run git push origin master
make sure to run nodemon befor running the page
Create a file called "error404.jsx" inside your "views" folder
Inside your "error404.jsx" file, import "React" and the "Def"
create a function called "error404"
inside "error404" make a "return()"
inside "return()" make a "Def", "main", "h1" and "p" tag
inside the "h1" tag type "404: page not found"
inside "p" tag type "Oops, sorry, we can't find this page!"
add commit
run git add .
run git commit -m "Adding 404 page view"
run git push origin master
create a "places" folder inside the "views" folder
inside the "places" folder make a file called "index.jsx"
inside "index.jsx" create a "require('react')" and "require('./default')"
next create a function called "places"
inside "places" create a "return()"
inside thr "return()" make a "Def", "mian" and "h1"
inside "h1" type "Places"
create mock data
inside of "places.js" create an array called "places" with objects such as "name", "location", "city", "state" and a pic if wanted
inside of "places.js" change "res.send()" to "res.render()"
pass "places" into "res.render()"
Go back to views/places/index.jsx and create a function called "index"
call the parameter "data" for the "index" function
format the data in the places array into HTML
make map.places an arrow function
return() "div", "h2" and a "img" tag
return() a second time and place "main" and "h1" tags inside
place {placesFormatted} under the "h1" tag
add commit
git add .
git commit -m "Adding places view with mock data"
git push origin master
adding css
Get a CDN link to the latest version of Bootstrap
link the stylesheet and put the CND link inside a href
add the button named Places to the "home.jsx"
make a public folder
inside the public folder make a main.css
inside main.css give h1 text-aline center and a color of blue
link the main.css under the CDN link
add commit
git add .
git commit -m "Adding styles"
git push origin master
more images go to pixabay and pic out a free home page image and a 404 image
use the image tag to place the images
using bootstap for the index page
pick out two more images from pixabay and add them to "index.jsx"
make a "div" with the className of "col-sm-6"
and a "div" with the className of "row"
create two "p" tags with the className of "text-center"
inside the first"p" tage place {place.cuisines}
inside the second "p" tag place Located in {place.city}, {place.state}
git add .
git commit -m "Adding Bootstrap grid to index page"
git push origin master

IMPORTANT
the spagetti image is from Pixabay and was made by Divily
the brick wall is from Pixabay and was made by Pexels
the error404 image is from Pixabay and was made by aitoff
the tea-cat is from Pixabay and was made by yukiqwa

in veiws folder go to places folder and create a new file called "new.jsx"
inside "new.jsx" make a "require('react')" and "require('../default')"
next make a new function called "new_form"
inside the function make a return()
inside return create a "Def", "main" and "h1" tag
next go to "places.js" and crreate another "router.get()"
inside the "router.get()" make a new "render('places/new')"
add commit
git add .
git commit -m "Adding and rendering a new view"
git push origin master
Make a Form
add Post method to new.jsx
inside the post method create a "lable" and "input"
Make a "name lable", "pic lable", "city lable", "state lable" and a "Cuisines lable"
Make a "name input", "pic input", "city input", "state input" and a "Cuisines input"
make the "name input" and "Cuisines input" and set them to "required"
Fancy Up Your Form
Add the class "form-group" to each of the "div" tags
Add the class "form-control" to each "input" tag
Add the classes "btn and btn-primary" to the "submit button"
add commit
git add .
git commit -m "Jazzed up form page"
git push origin master
add nav bar
in the nav bar make a list of items such as home, places and new place
add css to make it look pretty
add commit
git add .
git commit -m "Navbar with style"
git push origin master
Connect the Show Route
add a new file called show.jsx
inside show.jsx require('react') and require('../default.jsx') and a show function
Open the places.js controller
create a router.get('/:id', (req, res) => {})...
render places/show
add if else statements
In the index.jsx file, make each place name a link
add commit
git add .
git commit -m "Show route connected"
git push origin master
Fill Out the Show Page
In the show.jsx file, display all the information about a place
use def main and h1 tags
Add a Rating section and a Comments section and
add css
Implement Method Override
install the method-override npm
Open your index.js file. At the top of the file, require the method-override package
make app.use method-override
Make Edit and Delete Buttons these buttond shoud be in show.jsx
in the form above the button add the attributes action and method to form. Set the method attribute to POST
call res.render() from the places.js controller
Implement Your Delete Route
make router.delete('/:id', (req, res) => {})
inside use else if in the last else statment place
places.splice(id, 1)
res.redirect('/places')
add commit
git add .
git commit -m "Delete functionality implemented"
git push origin master
