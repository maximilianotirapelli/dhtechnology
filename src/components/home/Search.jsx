import { DateRangePicker } from "@/components/home/DateRangePicker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { parse } from "date-fns";
import { MdSearch } from "react-icons/md";

export default function Search() {
  const [searchProduct, setSearchProduct] = useState("");
  const [searchDate, setSearchDate] = useState({ from: "", to: "" });
  // Search Params:
  const [search, setSearch] = useSearchParams();

  function handleSearch() {
    setSearch({
      dateFrom: searchDate.from,
      dateTo: searchDate.to,
      product: searchProduct,
    });

    window.scroll({ top: 560, behavior: "smooth" });
  }

  useEffect(() => {
    !searchProduct &&
      !searchDate.from &&
      !searchDate.to &&
      setSearch({
        product: "",
        dateFrom: "",
        dateTo: "",
      });
  }, [searchDate, searchProduct, setSearch]);

  return (
    <search className="flex flex-col items-center justify-center gap-8 mt-10 sm:flex-row">
      {/* Input de búsqueda */}
      <div className="flex items-center">
        <MdSearch className="relative h-4 w-4 left-8" />
        <Input
          type="text"
          placeholder="¿Qué productos querés alquilar?"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          className="pl-10 pr-8 w-[273px] lg:w-[360px] h-10 border rounded-2xl shadow-md focus:border-none transition-all duration-300 ease-in-out hover:border-gray-400 bg-gray-100"
        />
      </div>

      <div className="flex gap-4 items-center">
        <DateRangePicker
          searchDate={searchDate}
          setSearchDate={setSearchDate}
        />

        <Button
          className="flex items-center shadow-md rounded-xl text-base text-white"
          onClick={handleSearch}
        >
          <MdSearch className="md:hidden w-5 h-5" />
          <span className="hidden md:flex">Buscar</span>
        </Button>
      </div>
    </search>
  );
}
