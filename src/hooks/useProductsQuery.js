import { omit } from 'lodash-es'
import { useQuery } from 'react-query'
import Product from '../models/Product'
import { tr } from 'faker/lib/locales';

function useProductsQuery({ filters }) {

   
    
  const result = useQuery(['https://dummyjson.com/products',{ limit: 10, ...filters }], {
    placeholderData: {
      products: [],
      total: null,      
    },
    keepPreviousData: true,
  });
  console.log('products total: '+ result.data.total);
  return result;
}

export default useProductsQuery
