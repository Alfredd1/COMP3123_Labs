/*
Purpose: 
- Serve multiple paths from an Express server using routes
- Serve a static html file
- Extract GET params(compare with GET query)
*/

const express = require("express")
const path = require("path")
const app = express()

const SERVER_PORT = process.env.PORT || 3000
const publicDir = path.join(__dirname, "public")

// -------------SET UP MIDDLEWARE FOR EXPRESS
// Serve static files
// The URL of the webpage can be accessed through localhost:3000/static
app.use("/static", express.static(publicDir))
app.use(express.static(publicDir))


// Serve JSON
app.use(express.json())

// Read URL params or queries 
app.use(express.urlencoded({extended: true}))

app.get("/", (request, response) => {
    response.send("<h1>Welcome to the root of the server - using GET method</h1>")
})

app.get("/hello", (request, response) => {
    response.status(200).send("<h1>Welcome to the /hello path on the server </h1>")
})

app.get("/college", (request, response) => {
    const college = {
        name: "George Brown Polytechnic",
        location: "Toronto",
        established: 1967
    }
    
    response.json(college)
})

app.get("/students", (request, response) => {
    if(!request.query.name || !request.query) {  
    return response.status(400).json({
        error: "Missing query parameters"
    })
    }
    console.log(request.query)

    const name = request.query.name
    const age = request.query.age
    response.json({
        student_name: name,
        student_age: age
    })
})

app.get("/students/:name/:age", (request, response) => {
    console.log(request.params)
    
    if(!request.params.name || !request.params.age) {
        return response.status(400).json({
            error: "Missing URL parameters"
        })
    }

    const name = request.params.name
    const age = request.params.age
    response.json({
        student_name: name,
        student_age: age
    })
})


app.post("/students", (request, response) => {
    const student = request.body
    console.log(student)
    if(!request.student_name || !request.student_age) {
        return response.status(400).json({
            error: "Missing body parameters"
        })
    }

    const name = request.body.name
    const age = request.body.age
    response.json({
        student_name: name,
        student_age: age
    })

})

app.listen(SERVER_PORT, () => {
    console.log("Server is running on http://localhost: " + SERVER_PORT)
})