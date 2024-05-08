import classNames from 'classnames'
import React from 'react'
import { ProductList } from '../components'
import { useAuth } from '../hooks'


function Products() {
  const { isAuth } = useAuth()



  return (
    <div className="home-page">
      
      <div className="container page">
        <div className="row">
          <div className="col-md-9">            
             <ProductList/>
             <span>Test product listing</span>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Products
