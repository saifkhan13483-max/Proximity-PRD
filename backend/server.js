const { app, seedAdmin } = require('./app')

const PORT = process.env.PORT || 3001

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Proximity Auth API running on port ${PORT}`)
  seedAdmin().catch((err) => {
    console.error('[seedAdmin] Failed (non-fatal, server still running):', err.message)
  })
})

process.on('uncaughtException', (err) => {
  console.error('[uncaughtException]', err.message)
})

process.on('unhandledRejection', (reason) => {
  console.error('[unhandledRejection]', reason)
})

process.on('SIGTERM', () => {
  console.log('[SIGTERM] Shutting down gracefully...')
  server.close(() => {
    console.log('[SIGTERM] Server closed.')
    process.exit(0)
  })
  setTimeout(() => {
    console.error('[SIGTERM] Forcefully shutting down.')
    process.exit(1)
  }, 10000)
})

process.on('SIGINT', () => {
  console.log('[SIGINT] Shutting down gracefully...')
  server.close(() => {
    console.log('[SIGINT] Server closed.')
    process.exit(0)
  })
})
