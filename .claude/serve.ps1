$port = if ($env:PORT) { [int]$env:PORT } else { 5500 }
$root = "C:\Users\kabou\OneDrive - Lumina Solutions\Lumina\Website\Claude website"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Output "Listening on http://localhost:$port"
$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css'
  '.js'   = 'application/javascript'
  '.svg'  = 'image/svg+xml'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.ico'  = 'image/x-icon'
  '.webp' = 'image/webp'
  '.woff2'= 'font/woff2'
}
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $local = $ctx.Request.Url.LocalPath
  if ($local -eq '/' -or $local -match '/$') { $local = $local.TrimEnd('/') + '/index.html' }
  $file = Join-Path $root $local.TrimStart('/')
  if (Test-Path $file -PathType Leaf) {
    $bytes = [System.IO.File]::ReadAllBytes($file)
    $ext = [System.IO.Path]::GetExtension($file).ToLower()
    $ctx.Response.ContentType = if ($mime[$ext]) { $mime[$ext] } else { 'application/octet-stream' }
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    Write-Output "200 $local"
  } else {
    $ctx.Response.StatusCode = 404
    Write-Output "404 $local"
  }
  $ctx.Response.Close()
}
