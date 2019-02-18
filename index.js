const http = require('http')

const responseObject = {
  id: 1,
  first_name: 'Hill',
  last_name: 'Williams',
  address: {
    street: 'Sunset blv',
    city: 'San Diego',
    state: 'California'
  }
}

const requestListener = (req, res) => {
  if (req.url === '/persons/') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(responseObject))
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('NOT FOUND')
  }
}

http.createServer(requestListener).listen(9615)
