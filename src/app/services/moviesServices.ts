export const getCountries = async () => {
  try {
    const response = await fetch('/api/countries');
    if (!response.ok) {
      throw new Error('Erro ao buscar países');
    }
    const countriesData = await response.json();
    
    // Se a resposta for um objeto, transformar em array
    // Se já for um array, retornar como está
    if (Array.isArray(countriesData)) {
      return countriesData;
    } else {
      // Transformar objeto em array de países
      return Object.values(countriesData);
    }
  } catch (error) {
    console.error('Erro no service:', error);
    return [];
  }
}