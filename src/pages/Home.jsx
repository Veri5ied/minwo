import SearchInput from "../ui/search-input/SearchInput";
import Card from "../component/card/Card";
import { useContext, useState } from "react";
import GeneralContext from "../context/general-context/GeneralContext";
const Home = () => {
  const { getProducts, products } = useContext(GeneralContext);

  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = async () => {
    if (search === "") {
      setError(true);
      return;
    } else {
      await getProducts({ params: search });
      setError(false);
    }
  };
  //map through the product list and get all categories while removing duplicates, then use those categories to filter the products by category and display them in the UI
  const categories = [
    ...new Set(
      products?.products?.map((product) => {
        return product.category;
      })
    ),
  ];

  const handleCategoryClick = (category) => {
    const filteredProducts = products?.products?.filter(
      (product) => product.category === category
    );
    setResults(filteredProducts);
  };

  return (
    <div className="home__container">
      <SearchInput
        value={search}
        onChange={handleSearch}
        onClick={handleSearchClick}
        error={error}
      />
      <div className="filter__container">
        {categories.length >= 1 && <p>Filter by Category</p>}
        <div className="product--categories">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="product--categories--button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="search__results">
        <p>
          Search Result:{" "}
          {products?.products?.length > 0 ? products?.products?.length : 0}
        </p>
      </div>
      <div className="home__container--results">
        {products &&
          products?.products?.map(
            ({ title, thumbnail, description, brand, price }) => (
              <Card
                title={title}
                thumbnail={thumbnail}
                description={description}
                brand={brand}
                price={price}
                key={title}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Home;
