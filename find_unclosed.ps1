
$lines = Get-Content app.js
$stack = New-Object System.Collections.Generic.Stack[int]

for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    $chars = $line.ToCharArray()
    for ($j = 0; $j -lt $chars.Length; $j++) {
        if ($chars[$j] -eq '{') {
            $stack.Push($i + 1)
        }
        elseif ($chars[$j] -eq '}') {
            if ($stack.Count -gt 0) {
                [void]$stack.Pop()
            } else {
                Write-Output "Unmatched closing brace at line $($i+1)"
            }
        }
    }
}

Write-Output "Unclosed opening braces at lines:"
while ($stack.Count -gt 0) {
    Write-Output $stack.Pop()
}
