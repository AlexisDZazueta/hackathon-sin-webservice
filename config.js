'use strict'

// Export Modules
module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb://localhost/hackathon-sin',
  SECRET_TOKEN: 'd2041889dab7ff30acecc3eba0a680e5'  
}