import { NextResponse } from 'next/server';
import * as streamingAvailability from "streaming-availability";

const client = new streamingAvailability.Client(new streamingAvailability.Configuration({
  apiKey: process.env.API_KEY 
}));

export async function GET() {
  try {
    const countriesObject = await client.countriesApi.getCountries();
    
    const countriesArray = Object.values(countriesObject);
    
    return NextResponse.json(countriesArray);
  } catch (error) {
    console.error('Erro ao buscar países:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar países' },
      { status: 500 }
    );
  }
}