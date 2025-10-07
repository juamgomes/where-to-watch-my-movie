'use client'
import { useEffect, useState } from "react";
import { getCountries } from "./services/moviesServices";
import { Country } from "streaming-availability";

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const res = await getCountries();
     
        setCountries(res);
      } catch (error) {
        console.error("Erro ao carregar países:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline mb-4">Where to Watch My Movie</h1>
      
      {loading ? (
        <p>Carregando países...</p>
      ) : (
        <div>
          <label htmlFor="countries" className="block mb-2 font-medium">
            Selecione um país:
          </label>
          <select 
            name="countries" 
            id="countries"
            className="border border-gray-300 rounded-md p-2 w-full max-w-xs"
          >
            <option value="">Escolha um país</option>
            {countries.map((country) => (
              <option key={country.countryCode} value={country.countryCode}>
                {country.name}
              </option>
            ))}
          </select>
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Total de países disponíveis: {countries.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
