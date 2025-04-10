# Build the project
Write-Host "Building the project..." -ForegroundColor Green
npm run build

# Check if the build was successful
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Exiting." -ForegroundColor Red
    exit 1
}

# Copy the output to the docs folder
Write-Host "Copying output to docs folder..." -ForegroundColor Green
if (Test-Path -Path "docs") {
    Remove-Item -Path "docs" -Recurse -Force
}
New-Item -Path "docs" -ItemType Directory
Copy-Item -Path "out\*" -Destination "docs" -Recurse

# Add a .nojekyll file to the docs folder
Write-Host "Adding .nojekyll file..." -ForegroundColor Green
New-Item -Path "docs\.nojekyll" -ItemType File -Force

# Commit and push the changes
Write-Host "Committing and pushing changes..." -ForegroundColor Green
git add docs
git commit -m "Update portfolio with carousel fixes"
git push origin main

Write-Host "Deployment complete!" -ForegroundColor Green
