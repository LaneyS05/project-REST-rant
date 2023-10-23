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
add final commit
run git add .
run git commit -m "Adding remaining stub routes"
run git push origin master

make sure to run nodemon befor running the page
