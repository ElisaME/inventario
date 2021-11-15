import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const Product = () => {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState({})

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await fetch(`https://radiant-ridge-01211.herokuapp.com/products/${id}`)
      const data = await res.json()
      console.log('dataaaaa----', data)
      setProduct(data.prod)
    } catch (error) {
      console.log('aquiii', error)
    }
  }

  const eliminarProducto = async () => {
    try {
      const res = await fetch(`https://radiant-ridge-01211.herokuapp.com/deleteProduct/${id}`, {
        method:'DELETE'
      })
      const data = await res.json()
      console.log('delete----', data)
      if (data){
        router.push('/')
      }
    } catch (error) {
      console.log('aquiii', error)
      alert('Error al eliminar producto.')
    }
  }

  return (
    <div className="m-4 p-4 bg-white rounded-md w-full">
      <p className="font-bold mb-2">Producto: {product.name}</p>
      <div class="-mx-3 mb-6">
        {/* Nombre del producto */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <span class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-name">
            Nombre del producto:
          </span>
          <span>{product.name}</span>
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p */}
        </div>
        {/* Descripción */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <span class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-name">
            Descripción del producto:
          </span>
          <span>{product.description}</span>
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p */}
        </div>
        {/* Stock */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <span class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-name">
            Stock:
          </span>
          <span>{product.stock}</span>
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p */}
        </div>
        {/* Precio */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <span class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-name">
            Precio:
          </span>
          <span>${product.price}</span>
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p */}
        </div>
      </div>
      <div class="m-4">
          <label class="inline-block mb-2 text-gray-500">Imagen</label>
          <div class="flex items-center justify-center w-1/4">
            <div class="flex flex-col items-center justify-center p-2">
              <img src={product.image} className="h-32"/>
            </div>
          </div>
      </div>
      <div class="flex p-2 space-x-4 justify-end w-full">
        <button onClick={eliminarProducto} class="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Eliminar</button>
        <Link href={`/editProduct/${product._id}`}>
        <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Editar Producto</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;