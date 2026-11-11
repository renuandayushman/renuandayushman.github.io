/**
 * ==========================================================================
 * RENU & AYUSHMAN WEDDING RSVP WEBHOOK SCRIPT (Google Apps Script)
 * ==========================================================================
 * 
 * HOW TO SET THIS UP IN 2 MINUTES:
 * 1. Open Google Sheets (https://sheets.new) and name it: "Renu & Ayushman Wedding RSVPs"
 * 2. In the menu, go to: Extensions > Apps Script
 * 3. Delete any code in the editor, and paste the entire code from this file.
 * 4. Click "Save" (floppy disk icon or Ctrl+S / Cmd+S).
 * 5. Click "Deploy" (blue button at top right) > "New deployment".
 * 6. Under "Select type" (gear icon), select "Web app".
 * 7. Set configuration:
 *    - Description: "Wedding RSVP Webhook"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (essential so the website can post RSVPs)
 * 8. Click "Deploy", review permissions, and copy the "Web app URL" (ends with /exec).
 * 9. Paste this URL into `src/data/weddingData.ts` under `rsvpConfig.googleAppsScriptUrl`.
 * 
 * That's it! Every RSVP will now instantly appear in your Google Sheet with zero server costs.
 * ==========================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait up to 10 seconds for concurrent write locks

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if the sheet is fresh
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Submission Timestamp",
        "Full Name(s)",
        "Attending?",
        "Total Guests",
        "Plus-One Names",
        "WhatsApp Number",
        "Email Address",
        "Events Attending",
        "Travel Mode",
        "Arrival Date",
        "Arrival Time",
        "Join Cab Pool?",
        "Dietary Notes",
        "Cocktail Song Request",
        "Blessing / Personal Note"
      ];
      sheet.appendRow(headers);
      
      // Style headers: Sadya sage green with white bold text
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#4A5D4E");
      headerRange.setFontColor("#FAF7F2");
      headerRange.setFontWeight("bold");
      headerRange.setFontFamily("Arial");
      sheet.setFrozenRows(1);
    }

    // Parse the payload sent from the wedding website
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    var timestamp = data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    var fullName = data.fullName || "";
    var attending = data.attending === "yes" ? "YES (Attending)" : (data.attending === "no" ? "NO (Sending Love)" : data.attending);
    var guestCount = data.guestCount || 1;
    var plusOneNames = data.plusOneNames || "";
    var whatsapp = data.whatsapp || "";
    var email = data.email || "";
    var eventsAttending = data.eventsAttending || "";
    var travelMode = data.travelMode || "";
    var arrivalDate = data.arrivalDate || "";
    var arrivalTime = data.arrivalTime || "";
    var joinCabPool = data.joinCabPool ? "YES" : "No";
    var dietaryNotes = data.dietaryNotes || "";
    var songRequest = data.songRequest || "";
    var personalNote = data.personalNote || "";

    // Append the row
    sheet.appendRow([
      timestamp,
      fullName,
      attending,
      guestCount,
      plusOneNames,
      whatsapp,
      email,
      eventsAttending,
      travelMode,
      arrivalDate,
      arrivalTime,
      joinCabPool,
      dietaryNotes,
      songRequest,
      personalNote
    ]);

    // Return success response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "RSVP recorded successfully for " + fullName
    }))
    .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// Simple test function to verify sheet permissions in Apps Script editor
function testWrite() {
  var mockEvent = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        fullName: "Test Guest",
        attending: "yes",
        guestCount: 2,
        plusOneNames: "Partner Name",
        whatsapp: "+91 9876543210",
        email: "test@example.com",
        eventsAttending: "temple, registrationAndSadya, cocktails",
        travelMode: "Flight to Kochi (COK)",
        arrivalDate: "2027-01-29",
        arrivalTime: "3:00 PM",
        joinCabPool: true,
        dietaryNotes: "Vegetarian",
        songRequest: "Dancing Queen",
        personalNote: "Heartiest congratulations!"
      })
    }
  };
  var result = doPost(mockEvent);
  Logger.log(result.getContent());
}
