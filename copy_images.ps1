$artDir = "C:\Users\jaydip\.gemini\antigravity-ide\brain\e8d2ec9d-9535-40df-aa45-4e010f08e188"
$base = "d:\004 - Why meditate - website\chavda"

Copy-Item "$artDir\hero_engagement_couple_1789362670573.jpg" "$base\images\hero\hero-main.jpg" -Force
Copy-Item "$artDir\hero_engagement_couple_1789362670573.jpg" "$base\images\engagement\engagement-01.jpg" -Force
Copy-Item "$artDir\hero_engagement_couple_1789362670573.jpg" "$base\images\couple\couple-01.jpg" -Force

Copy-Item "$artDir\bride_portrait_1789362694223.jpg" "$base\images\hero\bride.jpg" -Force
Copy-Item "$artDir\bride_portrait_1789362694223.jpg" "$base\images\morning\morning-02.jpg" -Force
Copy-Item "$artDir\bride_portrait_1789362694223.jpg" "$base\images\couple\couple-02.jpg" -Force

Copy-Item "$artDir\groom_portrait_1789362717334.jpg" "$base\images\hero\groom.jpg" -Force
Copy-Item "$artDir\groom_portrait_1789362717334.jpg" "$base\images\morning\morning-03.jpg" -Force
Copy-Item "$artDir\groom_portrait_1789362717334.jpg" "$base\images\couple\couple-03.jpg" -Force

Copy-Item "$artDir\sparkling_ring_1789362739650.jpg" "$base\images\engagement\sparkling-ring.jpg" -Force
Copy-Item "$artDir\sparkling_ring_1789362739650.jpg" "$base\images\engagement\engagement-02.jpg" -Force

Copy-Item "$artDir\vidhi_ceremony_1789362769185.jpg" "$base\images\vidhi\vidhi-01.jpg" -Force
Copy-Item "$artDir\vidhi_ceremony_1789362769185.jpg" "$base\images\vidhi\vidhi-02.jpg" -Force
Copy-Item "$artDir\vidhi_ceremony_1789362769185.jpg" "$base\images\vidhi\vidhi-03.jpg" -Force

Copy-Item "$artDir\morning_preparation_1789362797073.jpg" "$base\images\morning\morning-01.jpg" -Force

Copy-Item "$artDir\afternoon_celebration_1789362860455.jpg" "$base\images\afternoon\afternoon-01.jpg" -Force
Copy-Item "$artDir\afternoon_celebration_1789362860455.jpg" "$base\images\afternoon\afternoon-02.jpg" -Force

Copy-Item "$artDir\outdoor_sunset_1789362823862.jpg" "$base\images\outdoor\outdoor-01.jpg" -Force
Copy-Item "$artDir\outdoor_sunset_1789362823862.jpg" "$base\images\outdoor\outdoor-02.jpg" -Force
Copy-Item "$artDir\outdoor_sunset_1789362823862.jpg" "$base\images\outdoor\outdoor-03.jpg" -Force
Copy-Item "$artDir\outdoor_sunset_1789362823862.jpg" "$base\images\engagement\engagement-03.jpg" -Force

Write-Output "Images copied successfully."
