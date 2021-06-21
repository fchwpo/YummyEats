import { mocks, mockImages } from "./mock";
import camelcaseKeys from "camelcase-keys";

export const restaurantsRequest = (
  location = "37.7749295,-122.4194155"
): Promise<{ results: [] }> => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }: { results: any[] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(() => {
      return (
        mockImages[Math.ceil(Math.random() * (mockImages.length - 1))] ||
        mockImages[0]
      );
    });

    return {
      ...restaurant,
      address: restaurant.address || restaurant.vicinity,
      icon: restaurant.icon || restaurant.ix,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelcaseKeys(mappedResults, {
    deep: true,
  });
};
