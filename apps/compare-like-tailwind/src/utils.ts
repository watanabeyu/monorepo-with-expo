import Chance from "chance";

const chance = new Chance();

export interface ItemData {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  store: string;
  rating: number;
  reviews: number;
  shipping: string;
}

// ダミーデータの生成
export const generateData = (count: number = 6): ItemData[] => {
  return Array.from({ length: count }).map(() => ({
    id: chance.guid(),
    title: chance.sentence({ words: 3 }),
    price: chance.integer({ min: 1000, max: 100000 }),
    imageUrl: `https://picsum.photos/seed/${chance.guid()}/300/200`,
    store: chance.company(),
    rating: chance.integer({ min: 1, max: 5 }),
    reviews: chance.integer({ min: 0, max: 100 }),
    shipping: chance.pickone(["送料無料", "送料別"]),
  }));
};
