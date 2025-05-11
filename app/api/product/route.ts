import { NextRequest, NextResponse } from 'next/server';
import { getDb, closeDB } from '@/utils/mongodb';

export async function GET(request: NextRequest) {
  try {
    const db = await getDb();
    const productsCollection = db.collection('users');
    const products = await productsCollection.find({}).toArray();
    console.log(products)
    return new NextResponse(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch products' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } finally {
    await closeDB();
  }
}