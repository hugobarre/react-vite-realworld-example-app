import React from 'react'
import { isEmpty, isNil } from 'lodash-es'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { useProductsQuery } from '../hooks'



/** @type {Filters} */

const initialFilters = { skip: null}
const limit = 10


function ProductList({ filters = initialFilters }) {
   const [skip, setOffset] = React.useState(0)
   const { data, isFetching, isError, isSuccess } = useProductsQuery({ filters: { ...filters, skip } })
   const pages = Math.ceil(data.total / limit)


   if (isFetching) return <p className="article-preview">Loading products...</p>
   if (isError) return <p className="article-preview">Loading products failed :(</p>
   if (isSuccess && isEmpty(data?.products)) return <p className="article-preview">No products are here... yet.</p>

  return (
    <>
      <ul>
      {data.products.map((product) => (
        <li>{product.title}  &nbsp;  {product.description}</li> 
      ))}
      </ul>   
      {pages > 1 && (
        <nav>
          <ul className="pagination">
            {Array.from({ length: pages }, (_, i) => (
              <li className={skip === i ? 'page-item active' : 'page-item'} key={i}>
                <button type="button" className="page-link" onClick={() => setOffset(i)}>
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}   
    </>
  )
}

export default ProductList
