/* eslint-disable no-console */
const express = require('express')
const next = require('next')

const devProxy = {
  '/fotballapi': {
    target: 'http://fotball.bekk.no/api/',
    pathRewrite: { '^/fotballapi': '/' },
    changeOrigin: true
  }
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev
})

const handle = app.getRequestHandler()

let server
app
  .prepare()
  .then(() => {
    server = express()

    // Set up the proxy.
    if (dev && devProxy) {
      console.log("Dev proxy setup");
      const proxyMiddleware = require('http-proxy-middleware')
      Object.keys(devProxy).forEach(function (context) {
        server.use(proxyMiddleware(context, devProxy[context]))
      })
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.get("/event/:id", (req, res) => {
        return app.render(req, res, "/event", { id: req.params.id })
      })
      
    server.all('*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port} [${env}]`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log(err)
  })