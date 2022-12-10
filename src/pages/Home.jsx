import SearchInput from "../ui/search-input/SearchInput";
import Card from "../component/card/Card";
import { useContext, useState } from "react";
import GeneralContext from "../context/general-context/GeneralContext";
const Home = () => {
  const { getProducts, products } = useContext(GeneralContext);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = async () => {
    await getProducts({ params: search });
    console.log(products);
  };

  return (
    <div className="home__container">
      <SearchInput
        value={search}
        onChange={handleSearch}
        onClick={handleSearchClick}
      />
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
              />
            )
          )}
      </div>
    </div>
  );
};

export default Home;
