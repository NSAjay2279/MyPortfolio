{
  "version": 2,
  "name": "Ajay's Portfolio",
  "builds": [
    { "src": "server.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/.*", "dest": "/server.js" }
  ]
}