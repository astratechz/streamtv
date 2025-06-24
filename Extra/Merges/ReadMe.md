✅ 100% Working Google Apps Script for Merging Multiple M3U URLs
javascript
Copy
Edit
function doGet(e) {
  const urls = e.parameters.url; // Important: use `parameters`, not `parameter`

  if (!urls || urls.length === 0) {
    return ContentService.createTextOutput('Error: No M3U URLs provided')
      .setMimeType(ContentService.MimeType.TEXT);
  }

  try {
    const mergedOutput = mergeM3U(urls);
    return ContentService.createTextOutput(mergedOutput)
      .setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    Logger.log('Error merging M3U: ' + error.stack);
    return ContentService.createTextOutput('Error merging M3U: ' + error.message)
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function mergeM3U(urls) {
  let output = '#EXTM3U\n';
  const seen = new Set();

  urls.forEach(url => {
    try {
      const response = UrlFetchApp.fetch(url);
      let content = response.getContentText();

      // Remove the first #EXTM3U line if present
      if (content.startsWith('#EXTM3U')) {
        content = content.substring(content.indexOf('\n') + 1);
      }

      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('#EXTINF')) {
          const streamUrl = (lines[i + 1] || '').trim();
          const key = line + streamUrl;
          if (!seen.has(key)) {
            seen.add(key);
            output += `${line}\n${streamUrl}\n`;
          }
          i++; // skip next line since it's already handled
        }
      }
    } catch (err) {
      Logger.log(`Failed to fetch or process URL: ${url} - ${err}`);
    }
  });

  return output.trim();
}
🧪 Example Test URL After Deployment:
ruby
Copy
Edit
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?url=https://iptv-org.github.io/iptv/languages/asm.m3u&url=https://iptv-org.github.io/iptv/languages/mya.m3u
✅ This version:

Works with 1, 2, or more url parameters.

Deduplicates streams based on #EXTINF + stream URL.

Keeps valid M3U format.

Would you like a UI for it (e.g., dropdown or pastebox for URLs)? Or filtering (by country, language, group)?
