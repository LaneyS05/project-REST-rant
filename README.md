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
