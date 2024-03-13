import { DateRangePicker } from '@/components/home/DateRangePicker';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MdSearch } from 'react-icons/md';

export default function Search() {
  const [product, setProduct] = useState('');
  const [search, setSearch] = useSearchParams({
    product: '',
    dateFrom: '',
    dateTo: '',
  });

  function handleChange(e) {
    setProduct(e.target.value);

    setSearch({
      product: e.target.value,
      dateFrom: search.get('dateFrom'),
      dateTo: search.get('dateTo'),
    });
  }

  return (
    <search className="ml-4 md:ml-96 mt-10 flex flex-col md:flex-row items-center md:gap-16">
    {/* Input de búsqueda */}
    <div className="hidden md:flex items-center">
      <Input
        type="text"
        placeholder="¿Qué productos estás buscando?"
        value={product}
        onChange={handleChange}
        className="h-10 w-full md:w-[450px] rounded-2xl border bg-gray-100 px-8 shadow-md transition-all duration-300 ease-in-out hover:border-gray-400 focus:border-none" 
        style={{ overflow: 'hidden' }}
      />
    </div>
  
    <DateRangePicker search={search} setSearch={setSearch} />
    <Button size="icon" variant="ghost">
      <MdSearch />
    </Button>
  </search>
  
  );
}
