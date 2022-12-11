const mockedResponse = {
  data: {
    results: [
      {
        id: 23,
        title: "Orange Essence Food Flavou",
        description:
          "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
        price: 14,
        discountPercentage: 8.04,
        rating: 4.85,
        stock: 26,
        brand: "Baking Food Items",
        category: "groceries",
        thumbnail: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/23/1.jpg",
          "https://i.dummyjson.com/data/products/23/2.jpg",
          "https://i.dummyjson.com/data/products/23/3.jpg",
          "https://i.dummyjson.com/data/products/23/4.jpg",
          "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
        ],
      },
    ],
  },
};

export default {
  get: jest.fn(() => Promise.resolve({ data: mockedResponse })),
};
