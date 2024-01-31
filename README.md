This is a diary web app to help you take note about what happen today and what going on with your mood in a day
To make it personal to you, you can make a database with google sheet and paste the script right here

```
const sheets = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1-8KN6p7yHOW-WfeTx5c-cOuoadZJ4Fy582qM2gyR_bI/edit#gid=0')
const sheet = sheets.getSheetByName('Sheet1')

function doPost(e) {
  let data = e.parameter
  sheet.appendRow([data.Tanggal, data.Mood, data.Message])
  return ContentService.createTextOutput('Success')
}
```

Then Change it at Main.jsx
Fetch ("{Paste your script from google sheet here}", , {
            method: "POST",
            body: formData
        }))


Enjoy your web app <3
