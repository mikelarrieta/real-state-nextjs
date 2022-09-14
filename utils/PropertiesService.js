import properties from "../data/properties.json" assert {type: "json"};
import details from "../data/details.json" assert {type: "json"};

export function getLastPropertiesForRent() {
   return properties.filter(x => x.purpose === "for-rent").slice(0, 6);
}

export function getLastPropertiesForSale() {
   return properties.filter(x => x.purpose === "for-sale").slice(0, 6);
}

export function getDetailsFor (externalID) {
   return details.filter(x => x.externalID === externalID)?.[0];
}

export function getPropertiesFilteredBy (purpose, rentFrequency, minPrice, maxPrice, roomsMin, bathsMin, sort, areaMax, furnishingStatus, categoryExternalID) {
   return properties
            .filter(x => (purpose === undefined) || x.purpose === purpose)
            .filter(x => (rentFrequency === undefined) || x.rentFrequency === rentFrequency)
            .filter(x => (minPrice === undefined) || x.price >= +minPrice)
            .filter(x => (maxPrice === undefined) || x.price <= +maxPrice)
            .filter(x => (roomsMin === undefined) || x.rooms >= +roomsMin)
            .filter(x => (bathsMin === undefined) || x.baths > +bathsMin)
            .filter(x => (areaMax === undefined) || x.area <= +areaMax)
            .filter(x => (furnishingStatus === undefined) || x.furnishingStatus === furnishingStatus)
            .filter(x => (categoryExternalID === undefined) || x.category.some(x => x.externalID === categoryExternalID))
            .sort((a, b) => {
               if (sort === "price-asc") return a.price - b.price;
               if (sort === "price-des") return b.price - a.price;
               if (sort === "date-asc") return a.createdAt - b.createdAt;
               if (sort === "date-des") return b.createdAt - a.createdAt;
               if (sort === "verified-score") return a.verifiedScore - b.verifiedScore;
               if (sort === "city-level-score") return a.cityLevelScore - b.cityLevelScore;
            });
}

