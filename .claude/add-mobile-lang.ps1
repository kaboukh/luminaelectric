$base = 'C:\Users\kabou\OneDrive - Lumina Solutions\Lumina\Website\Claude website'
$target = '    <div class="nav__mobile-cta">'

$frLang = "    <div class=""nav__mobile-lang"">`n      <button class=""active"">FR</button>`n      <button onclick=""location.href='/nl/'"">NL</button>`n      <button onclick=""location.href='/en/'"">EN</button>`n    </div>`n"

$nlLang = "    <div class=""nav__mobile-lang"">`n      <button onclick=""location.href='/'"">FR</button>`n      <button class=""active"">NL</button>`n      <button onclick=""location.href='/en/'"">EN</button>`n    </div>`n"

$enLang = "    <div class=""nav__mobile-lang"">`n      <button onclick=""location.href='/'"">FR</button>`n      <button onclick=""location.href='/nl/'"">NL</button>`n      <button class=""active"">EN</button>`n    </div>`n"

function Add-LangBlock($dir, $langBlock, $label) {
    $files = Get-ChildItem -Path $dir -Filter '*.html'
    foreach ($f in $files) {
        $c = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
        if ((-not $c.Contains('nav__mobile-lang')) -and $c.Contains($target)) {
            $c = $c.Replace($target, $langBlock + $target)
            [System.IO.File]::WriteAllText($f.FullName, $c, [System.Text.Encoding]::UTF8)
            Write-Host ("Updated " + $label + ": " + $f.Name)
        } else {
            Write-Host ("Skip " + $label + ": " + $f.Name)
        }
    }
}

Add-LangBlock $base $frLang 'FR'
Add-LangBlock (Join-Path $base 'nl') $nlLang 'NL'
Add-LangBlock (Join-Path $base 'en') $enLang 'EN'
Write-Host 'All done'
