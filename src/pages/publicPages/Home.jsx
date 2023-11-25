import { Marquee } from "@/components/home/Marquee";
import Slider from "@/components/home/Slider";
import Wrapper from "@/components/home/Wrapper";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/context/dataContext/hooks/useDataStore";
import { useEffect, useState } from "react";
import { MdArrowUpward } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import Search from "@/components/home/Search";

import categories from "@/mocks/categories.json";
import products from "@/mocks/products.json";

export default function Home() {
  const { state } = useDataStore();
  const [randomProducts, setRandomProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [shuffledProducts, setShuffledProducts] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProductsByCategories, setFilteredProductsByCategories] =
    useState([]);

  // Para tomar tomar los searchParams que llegan del componente Search que está en el Navbar
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (search.get("product")) {
      console.log("SearchParams useEffect");
      // Si hay un valor en la búsqueda de productos, filtra los productos según ese valor
      const filteredProductsBySearchParams = products.filter((product) =>
        product.name.toLowerCase().includes(search.get("product").toLowerCase())
      );

      setShuffledProducts(filteredProductsBySearchParams);

      // Tomar solo los primeros 10 productos
      const newSelectedProducts = filteredProductsBySearchParams.slice(0, 10);

      // Actualizar el estado con los productos filtrados
      setRandomProducts(newSelectedProducts);
    } else {
      console.log("RandomProducts useEffect");
      const updateRandomProducts = () => {
        // Ordenar aleatoriamente los productos
        //const shuffledProducts = state.products.sort(() => Math.random() - 0.5);
        const shuffledProducts = products.sort(() => Math.random() - 0.5);

        setShuffledProducts(shuffledProducts);

        // Tomar solo los primeros 10 productos
        const newSelectedProducts = shuffledProducts.slice(0, 10);

        // Actualizar el estado con 10 productos aleatorios
        setRandomProducts(newSelectedProducts);
      };

      // Llamamos a la función de actualización al montar el componente y cuando products cambia
      updateRandomProducts();
    }
  }, [search]);

  const elementsAmount =
    selectedCategories.length > 0
      ? filteredProductsByCategories.length
      : shuffledProducts.length;

  const handleClickFilterProducts = (selectedCategory) => {
    // Verificar si la categoría ya está presente en selectedCategories
    const isCategorySelected = selectedCategories.includes(selectedCategory);

    // Crear un nuevo array con las categorías actualizadas
    let updatedCategories;

    if (isCategorySelected) {
      // Si la categoría está seleccionada, quitarla del array
      updatedCategories = selectedCategories.filter(
        (category) => category !== selectedCategory
      );
    } else {
      // Si la categoría no está seleccionada, agregarla al array
      updatedCategories = [...selectedCategories, selectedCategory];
    }

    // Actualizar el estado con las categorías seleccionadas
    setSelectedCategories(updatedCategories);

    // Filtrar productos según las categorías seleccionadas
    const filteredProducts =
      updatedCategories.length > 0
        ? shuffledProducts.filter((product) =>
            updatedCategories.find((category) =>
              product.category.includes(category)
            )
          )
        : shuffledProducts;

    setFilteredProductsByCategories(filteredProducts);

    // Actualizar los productos aleatorios y la página actual
    setRandomProducts(filteredProducts.slice(0, 10));
    setCurrentPage(0);
  };

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const index = nextPage * 10;

    if (index >= elementsAmount) return;

    const remainingElements = elementsAmount - index;
    const elementsToDisplay = remainingElements >= 10 ? 10 : remainingElements;

    selectedCategories.length > 0
      ? setRandomProducts(
          [...filteredProductsByCategories].splice(index, elementsToDisplay)
        )
      : setRandomProducts(
          [...shuffledProducts].splice(index, elementsToDisplay)
        );

    setCurrentPage(nextPage);
    window.scroll({ top: 1020, behavior: "smooth" });
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;

    const index = prevPage * 10;

    selectedCategories.length > 0
      ? setRandomProducts([...filteredProductsByCategories].splice(index, 10))
      : setRandomProducts([...shuffledProducts].splice(index, 10));

    setCurrentPage(prevPage);
    window.scroll({ top: 1020, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      <div className="w-full relative">
        <Marquee />
        <img src="/img/Section 1.webp" alt="Top-home-img" className="w-full" />
        <div className="absolute bottom-10 md:bottom-15 lg:bottom-20 left-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white underline underline-offset-8 decoration-pink-500">
            DH Technology
          </h1>
          <h4 className="text-white text-lg md:text-2xl lg:text-3xl mt-2">
            Hacemos realidad tu proyecto
          </h4>
        </div>
      </div>

      <Search />

      {/* CATEGORÍAS */}
      <Slider
        categories={categories}
        handleClickFilterProducts={handleClickFilterProducts}
      />

      <h3 className="flex justify-end mt-2 mr-20 2xl:mr-56">
        {elementsAmount} resultados
      </h3>
      {/* PRODUCTOS */}
      <Wrapper
        products={randomProducts}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        currentPage={currentPage}
      />

      <div className="w-full saturate-150 relative">
        <img src="/img/Component.webp" alt="Bottom-home-img" className="pr-2" />

        <Button
          variant="outline"
          size="icon"
          className="absolute right-8 bottom-5 bg-gradient-to-b from-lime-400 to-lime-600 
          border-none rounded-md"
          onClick={() => window.scroll({ top: "0", behavior: "smooth" })}
        >
          <MdArrowUpward className="text-xl text-white" />
        </Button>
      </div>
    </div>
  );
}
