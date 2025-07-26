# Clear Database Script
# This script will clear all data from the portfolio database

Write-Host "🗑️  Clearing Portfolio Database..." -ForegroundColor Yellow

# Stop any running Node.js processes
Write-Host "Stopping server..." -ForegroundColor Blue
Stop-Process -Name "node" -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Delete the database file
if (Test-Path "portfolio.db") {
    Remove-Item "portfolio.db" -Force
    Write-Host "✅ Database cleared successfully!" -ForegroundColor Green
    Write-Host "All contact form submissions have been deleted." -ForegroundColor Green
} else {
    Write-Host "ℹ️  Database file not found (already cleared)" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "To restart the server with a fresh database, run:" -ForegroundColor Yellow
Write-Host '  $env:NODE_ENV="development"; npx tsx server/index.ts' -ForegroundColor White
Write-Host ""
Write-Host "Or simply run: npm run dev" -ForegroundColor White
