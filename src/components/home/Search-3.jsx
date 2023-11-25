import { DateRangePicker } from "@/components/home/DateRangePicker";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MdSearch } from "react-icons/md";

export default function Search() {
  const [product, setProduct] = useState("");
  const [search, setSearch] = useSearchParams({
    product: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(e) {
    setProduct(e.target.value);

    setSearch({
      product: e.target.value,
      dateFrom: search.get("dateFrom"),
      dateTo: search.get("dateTo"),
    });
  }

  return (
    <search className="flex items-center gap-16 ml-96 mt-10">
      {/* Input de búsqueda */}
      <div className="hidden md:flex items-center">
        <Input
          type="text"
          placeholder="¿Qué productos estás buscando?"
          value={product}
          onChange={handleChange}
          className="px-8 w-[450px] h-10 border rounded-2xl shadow-md focus:border-none transition-all duration-300 ease-in-out hover:border-gray-400 bg-gray-100"
        />
      </div>

      <DateRangePicker search={search} setSearch={setSearch} />
      <Button size="icon" variant="ghost">
        <MdSearch />
      </Button>
    </search>
  );
}
