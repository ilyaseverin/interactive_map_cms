/**
 * battle-glory-point controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::battle-glory-point.battle-glory-point",
  ({ strapi }) => ({
    // Import from JSON file
    async importFromJson(ctx) {
      try {
        const { data } = ctx.request.body;

        if (!data || !Array.isArray(data)) {
          return ctx.badRequest(
            "Invalid data format. Expected an array of objects."
          );
        }

        const results = {
          success: [],
          failed: [],
          skipped: [],
        };

        for (const item of data) {
          try {
            // Skip items without coordinates or not in Lipetsk region
            if (!item.coordinates || !item.is_in_lipetsk_region) {
              results.skipped.push({
                name: item.name,
                reason: "No coordinates or not in Lipetsk region",
              });
              continue;
            }

            // Map type from Russian to enum values
            let pointType:
              | "памятник/мемориал"
              | "мемориальная доска"
              | "воинское захоронение" = "памятник/мемориал";
            if (item.type) {
              const typeStr = item.type.toLowerCase();
              if (
                typeStr.includes("воинское захоронение") ||
                typeStr.includes("братская могила") ||
                typeStr.includes("могила")
              ) {
                pointType = "воинское захоронение";
              } else if (typeStr.includes("мемориальная доска")) {
                pointType = "мемориальная доска";
              }
            }

            // Extract municipality from address or region
            let municipality = item.region || "Липецкая область";
            if (item.formatted_address) {
              const addressParts = item.formatted_address.split(",");
              if (addressParts.length > 1) {
                municipality = addressParts[addressParts.length - 2].trim();
              }
            }

            // Create the point
            const newPoint = await strapi.entityService.create(
              "api::battle-glory-point.battle-glory-point",
              {
                data: {
                  title: item.name || item.object_name || "Без названия",
                  description: item.formatted_address || item.address || "",
                  point_type: pointType,
                  municipality: municipality,
                  address: item.address,
                  formatted_address: item.formatted_address,
                  coordinates: {
                    lat: item.coordinates.latitude,
                    lng: item.coordinates.longitude,
                  },
                  region: item.region,
                  object_name: item.object_name,
                  original_number: item.number,
                  publishedAt: new Date(),
                },
              }
            );

            results.success.push({
              name: item.name,
              id: newPoint.id,
            });
          } catch (error) {
            results.failed.push({
              name: item.name,
              error: error.message,
            });
          }
        }

        return ctx.send({
          message: "Import completed",
          stats: {
            total: data.length,
            success: results.success.length,
            failed: results.failed.length,
            skipped: results.skipped.length,
          },
          results,
        });
      } catch (error) {
        return ctx.internalServerError(`Import failed: ${error.message}`);
      }
    },

    // Get statistics by municipality and type
    async getStats(ctx) {
      try {
        const points = await strapi.entityService.findMany(
          "api::battle-glory-point.battle-glory-point",
          {
            fields: ["point_type", "municipality"],
            publicationState: "live",
          }
        );

        const stats = {
          byType: {},
          byMunicipality: {},
          byTypeAndMunicipality: {},
          total: points.length,
        };

        points.forEach((point) => {
          const type = point.point_type;
          const municipality = point.municipality;

          // Count by type
          if (!stats.byType[type]) {
            stats.byType[type] = 0;
          }
          stats.byType[type]++;

          // Count by municipality
          if (!stats.byMunicipality[municipality]) {
            stats.byMunicipality[municipality] = 0;
          }
          stats.byMunicipality[municipality]++;

          // Count by type and municipality
          if (!stats.byTypeAndMunicipality[type]) {
            stats.byTypeAndMunicipality[type] = {};
          }
          if (!stats.byTypeAndMunicipality[type][municipality]) {
            stats.byTypeAndMunicipality[type][municipality] = 0;
          }
          stats.byTypeAndMunicipality[type][municipality]++;
        });

        return ctx.send(stats);
      } catch (error) {
        return ctx.internalServerError(`Failed to get stats: ${error.message}`);
      }
    },
  })
);
