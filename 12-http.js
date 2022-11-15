const http = require('http')

const server = http.createServer((req, res)=>{
    //console.log(req)
    if(req.url=== '/'){
        res.end(`<h1>Home page</h1>
        <p>Stuff and stuff and stuff... </p>
        <a href="/about"> About</a>
        <a href="/?"> Error</a>`)
        return
    }
    if(req.url === '/about'){
        res.end(`<h1>Our History</h1>
        <p>Our brief history....</p>
        <a href="/"> back home</a>`)
        return
    }
   res.end(`<h1>Oops!</h1>
   <p>We cannot seem to find the resource your are looking for...</p>
   <a href="/"> back home</a>`)
})

server.listen(5000)