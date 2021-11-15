import Link from 'next/link'
import { useEffect, useState } from 'react';

function Products (props){
  console.log('props:', props)
  return (
    <div class="flex-1">
      <section class="container mx-auto p-6">
        <div class="flex justify-end mb-6">
          <Link href="/addProduct">
          <button class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
          Agregar Producto
          </button>
          </Link>
        </div>
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead class="bg-white">
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 border-b border-gray-600">
                  <th class="px-4 py-3 w-1/2">Nombre de Producto</th>
                  <th class="px-4 py-3">Categoría</th>
                  <th class="px-4 py-3">Estatus</th>
                  <th class="px-4 py-3">Proveedor</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr class="text-gray-700">
                  <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                      <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                      </div>
                      <div>
                        <p class="font-semibold text-black">Taladro</p>
                        <p class="text-xs text-gray-600">El taladro/atornillador compacto 20v max, color amarillo y negro.</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-ms font-semibold border">Herramienta</td>
                  <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Disponible </span>
                  </td>
                  <td class="px-4 py-3 text-sm border">Trupper</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products

export async function getStaticProps() {
  console.log('aquiiii')
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://radiant-ridge-01211.herokuapp.com/products')
  const productsData = await res.json()
  console.log('aquiiii', productsData)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      productsData,
    },
  }
}