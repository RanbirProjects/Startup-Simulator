#!/bin/bash

# Install dependencies
cd client
npm install

# Build the React app
npm run build

# Return to root
cd ..

# Create netlify.toml if it doesn't exist
if [ ! -f netlify.toml ]; then
  echo "Creating netlify.toml..."
  cat > netlify.toml << EOL
[build]
  base = "client"
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOL
fi

echo "Build completed successfully!" 