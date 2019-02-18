const http = require('http')
const router = require('tiny-router')

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

const sendPersons = (req, res) => {
  res.send(responseObject)
}

router.get('/persons/', sendPersons)
router.listen(9615)
