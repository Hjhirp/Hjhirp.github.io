#!/usr/bin/env bash
set -e

# Build the project
npm run build

# Navigate to the build output directory
cd dist/public

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Initialize git in this directory
git init
git checkout -b main
git add -A
git commit -m 'Deploy to GitHub Pages'

# Force push to the gh-pages branch of your repository
git push -f https://github.com/Hjhirp/Hjhirp.github.io.git main:gh-pages

# Return to the project root
cd -

echo "Deployment complete!"