const { app, seedAdmin } = require('../backend/app')

// Seed the admin user on cold start (non-blocking — idempotent, safe to repeat)
seedAdmin().catch((err) => console.error('[vercel] seedAdmin error:', err))

module.exports = app
