import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const EditProduct = () => {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState({})
  const [newProduct, setNewProduct] = useState({})
  const [imagePreview, setImagePreview] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await fetch(`https://radiant-ridge-01211.herokuapp.com/products/${id}`)
      const data = await res.json()
      setProduct(data.prod)
      setNewProduct(data.prod)
      setImagePreview(data.prod.image)
    } catch (error) {
      console.log('aquiii', error)
    }
  }

  const handleInput = (e) => {
    const {name, value} = e.target
    setNewProduct(prevState => ({
      ...prevState,
      [name]:value
    }))
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    const preview =  URL.createObjectURL(file)
    setImagePreview(preview)
    setNewProduct(prevState => ({
      ...prevState,
      "image_product":file
    }))
  }

  const editProduct = async (e) => {
    e.preventDefault()
    const {name, description, price, stock, image_product } = newProduct
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("image_product", image_product);
       
      const res = await fetch(`https://radiant-ridge-01211.herokuapp.com/editProduct/${id}`, {
        method: 'POST',
        body:formData,
      })
      const data = await res.json()
      console.log('dataaa', data)
      if (data.product){
        router.push('/')
      }
    } catch (error) {
      alert('Error al crear producto')
    }
  }

  return (
    <div className="m-4 p-4 bg-white rounded-md w-full">
      <p className="font-bold mb-2">Producto: {product.name}</p>
      <form onSubmit={editProduct}>
      <div class="flex flex-wrap -mx-3 mb-6">
        {/* Nombre del producto */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-name">
            Nombre del producto
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 mb-3 leading-tight"
            id="grid-first-name"
            type="text"
            placeholder="Ingresa el nombre del producto"
            name="name" onChange={handleInput}
            value={newProduct.name}
            />
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p */}
        </div>
        {/* Descripción */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-name">
            Descripción
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 mb-3 leading-tight"
            id="grid-first-name"
            type="text"
            placeholder="Ingresa descripción del producto"
            name="description" onChange={handleInput}
            value={newProduct.description}
            />
        </div>
        {/* Stock */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-name">
            Stock
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 mb-3 leading-tight"
            id="grid-first-name"
            placeholder="Ingresa el stock del producto"
            type="number"
            name="stock" onChange={handleInput}
            value={newProduct.stock}
            />
        </div>
        {/* Precio */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-name">
            Precio
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 mb-3 leading-tight"
            id="grid-first-name"
            placeholder="Ingresa un precio para el producto"
            type="number"
            name="price" onChange={handleInput}
            value={newProduct.price}
            />
        </div>
      </div>
      <div class="m-4">
          <label class="inline-block mb-2 text-gray-500">Seleccionar Imagen (jpg,png,svg,jpeg)</label>
          <div class="flex items-center justify-center w-1/4">
              <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 h-44">
                  <div class="flex flex-col items-center justify-center p-2">
                    {imagePreview? 
                    <img src={imagePreview} className="h-32"/>
                    :
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg"
                          class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                          fill="currentColor">
                          <path fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clip-rule="evenodd" />
                      </svg>
                      <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Selecciona un archivo</p>
                    </div>}
                  </div>
                  <input type="file" class="opacity-0" name="image_product" onChange={handleImage}/>
              </label>
          </div>
      </div>
      <div class="flex p-2 space-x-4 justify-end w-full">
        <button onClick={() => router.push('/')} class="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Cancelar</button>
        <button  type="submit" class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Guardar Producto</button>
      </div>
      </form>
    </div>
  );
};

export default EditProduct;