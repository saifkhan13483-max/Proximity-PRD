const { app, seedAdmin } = require('./app')

process.on('uncaughtException', (err) => {
  console.error('[uncaughtException] Server will continue:', err.message)
})

process.on('unhandledRejection', (reason) => {
  console.error('[unhandledRejection] Server will continue:', reason)
})

const PORT = process.env.PORT || 3001

// Start listening immediately — seed admin in the background (non-blocking)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Proximity Auth API running on port ${PORT}`)
  seedAdmin().catch((err) => {
    console.error('[seedAdmin] Failed (non-fatal, server still running):', err.message)
  })
})
