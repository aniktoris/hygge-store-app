import { useLoaderData } from 'react-router-dom';
import {ProductsGrid} from './ProductsGrid';
import { ProductsList } from './ProductsList';
import { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { ProductsResponse } from '@/utils/types';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export const ProductsContainer = () => {
  const {meta} = useLoaderData() as ProductsResponse;
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  return (
    <>
    <section>
      <div className='flex justify-between items-center mt-8'>
        <h4 className='font-medium text-md'>
        {totalProducts} product{totalProducts >1 && 's'}
        </h4>
        <div className='flex gap-x-4'>
          <Button
          onClick={() => setLayout('grid')}
          size='icon'
          variant={layout === 'grid' ? 'default' : 'ghost'}>
            <LayoutGrid/>
          </Button>
          <Button
            onClick={() => setLayout('list')}
            size='icon'
            variant={layout === 'list' ? 'default' : 'ghost'}>
            <List/>
          </Button>
        </div>
      </div>
      <Separator />
    </section>

    <div>
      {totalProducts === 0 ? (
        <h5>
          Sorry, no products matched your search...
        </h5>
      ) : layout === 'grid' ? (
        <ProductsGrid/>
      ) : (
        <ProductsList/>
      )
    }
    </div>
    </>
  )
}
