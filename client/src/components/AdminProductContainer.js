import React, { useEffect } from 'react'
import AdminProduct from './AdminProduct'
import {Loading} from '.'
import { useAppContext } from '../context/appContext'
import { Link  } from 'react-router-dom'


const AdminProductContainer = () => {
  const {isLoading, products, page, getUserProducts} = useAppContext()


  useEffect(() => {
    getUserProducts()
    // eslint-disable-next-line
  }, [page])

  
  if(isLoading) {
    return (<Loading />)
  }

  if(products.length === 0) {
    return (
    <div className='refresh-btn'>
      <button className='refresh-discover' onClick={() => getUserProducts()}>Refresh Page</button>
    </div>
    )
  }
  
  return (
    <>
    <div className='pl-content'>
      {products.map((product) => {
        return (<Link className='pl-link' key={product._id} ><AdminProduct key={product._id} {...product} /></Link>)
      })}
    </div>
    
    </>
  )
}

export default AdminProductContainer