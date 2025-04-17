#!/usr/bin/env bash

# Build the project
npm run build

# Navigate into the build output directory
cd dist/public

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Create a CNAME file if you have a custom domain
# echo "yourdomain.com" > CNAME

# Initialize git repository if it doesn't exist
git init
git checkout -b main

# Add all files
git add -A

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Force push to the GitHub Pages repository
git push -f git@github.com:Hjhirp/Hjhirp.github.io.git main:gh-pages

# Return to the project root
cd -

echo "Deployed to https://Hjhirp.github.io"