/**
 * Script to import battle glory points from geocoded_results.json
 *
 * Usage:
 * node scripts/import-battle-glory-points.js
 *
 * Or via API:
 * POST http://localhost:1337/api/battle-glory-points/import
 * Body: { "data": [...] }
 */

const fs = require("fs");
const path = require("path");

async function importPoints() {
  try {
    // Read the geocoded results file
    const filePath = path.join(__dirname, "../../geocoded_results.json");
    const rawData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(rawData);

    console.log(`📊 Total items in file: ${data.length}`);

    // Filter items with valid coordinates in Lipetsk region
    const validItems = data.filter(
      (item) => item.coordinates && item.is_in_lipetsk_region === true
    );

    console.log(
      `✅ Valid items (with coordinates in Lipetsk region): ${validItems.length}`
    );

    // Group by type
    const byType = {};
    validItems.forEach((item) => {
      const type = item.type || "unknown";
      if (!byType[type]) {
        byType[type] = 0;
      }
      byType[type]++;
    });

    console.log("\n📋 Items by type:");
    Object.entries(byType).forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });

    console.log("\n🚀 To import this data, you can:");
    console.log("1. Use the Strapi admin panel to upload manually");
    console.log(
      "2. Send a POST request to: http://localhost:1337/api/battle-glory-points/import"
    );
    console.log('   Body: { "data": <contents of geocoded_results.json> }');
    console.log("\n📝 Example curl command:");
    console.log(`curl -X POST http://localhost:1337/api/battle-glory-points/import \\
  -H "Content-Type: application/json" \\
  -d @${filePath}`);

    // Save filtered data for easy import
    const filteredPath = path.join(
      __dirname,
      "../../geocoded_results_filtered.json"
    );
    fs.writeFileSync(
      filteredPath,
      JSON.stringify({ data: validItems }, null, 2)
    );
    console.log(`\n💾 Filtered data saved to: ${filteredPath}`);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

importPoints();
