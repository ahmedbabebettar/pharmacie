
$lines = Get-Content app.js
$balance = 0
for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    $openBrace = ($line.ToCharArray() | Where-Object { $_ -eq '{' }).Count
    $closeBrace = ($line.ToCharArray() | Where-Object { $_ -eq '}' }).Count
    $balance += ($openBrace - $closeBrace)
    
    # If the balance ever drops below 0, or is surprisingly high, we want to know
    if ($balance -lt 0) {
        Write-Output "Line $($i+1): Negative balance! $balance -> $line"
    }
}
Write-Output "Final Balance: $balance"
