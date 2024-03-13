import { DateRangePicker } from '@/components/home/DateRangePicker';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { parse } from 'date-fns';
import { MdSearch } from 'react-icons/md';

export default function Search() {
  const [searchProduct, setSearchProduct] = useState('');
  const [searchDate, setSearchDate] = useState({ from: '', to: '' });
  // Search Params:
  const [search, setSearch] = useSearchParams();

  function handleSearch() {
    setSearch({
      dateFrom: searchDate.from,
      dateTo: searchDate.to,
      product: searchProduct,
    });

    const searchSection = document.getElementById('search-section');
    window.scroll({
      top: 1000,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    !searchProduct &&
      !searchDate.from &&
      !searchDate.to &&
      setSearch({
        product: '',
        dateFrom: '',
        dateTo: '',
      });
  }, [searchDate, searchProduct, setSearch]);

  return (
    <search
      id="search-section"
      className="mt-14 flex flex-col items-center justify-center gap-8 sm:flex-row "
    >
      {/* Input de búsqueda */}
      <div className="flex items-center">
        <MdSearch className="relative left-8 h-4 w-4" />
        <Input
          type="text"
          placeholder="¿Qué productos querés alquilar?"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          className="h-10 w-full rounded-2xl border bg-gray-100 pl-10 pr-8 shadow-md transition-all duration-300 ease-in-out hover:border-gray-400 focus:border-none sm:w-[273px] lg:w-[360px]"
          style={{ overflow: 'hidden' }}
        />
      </div>

      <div className="flex items-center gap-4">
        <DateRangePicker
          searchDate={searchDate}
          setSearchDate={setSearchDate}
        />

        <Button
          className="flex items-center rounded-xl text-base text-white shadow-md"
          onClick={handleSearch}
        >
          <MdSearch className="h-5 w-5 md:hidden" />
          <span className="hidden md:flex">Buscar</span>
        </Button>
      </div>
    </search>
  );
}
