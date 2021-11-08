import React from 'react';

const addProduct = () => {
  return (
    <div className="m-4 p-4 bg-white rounded-md w-full">
      <p className="font-bold mb-2">Agregar Producto</p>
      <form>
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
            placeholder="Jane"/>
          {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p */}
        </div>
        {/* Categoría */}
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-category">
            Categoría
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Ferretería</option>
              <option>Carpintería</option>
              <option>Herramientas</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
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
            placeholder="Ingresa descripción del producto"/>
        </div>
        {/* Stock */}
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-product-name">
            Stock
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 rounded py-3 px-4 mb-3 leading-tight"
            id="grid-first-name"
            type="number"/>
        </div>
        {/* Proveedor */}
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-category">
            Proveedor
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Trupper</option>
              <option>Pretul</option>
              <option>Marca</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="m-4">
          <label class="inline-block mb-2 text-gray-500">Seleccionar Imagen (jpg,png,svg,jpeg)</label>
          <div class="flex items-center justify-center w-full">
              <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div class="flex flex-col items-center justify-center pt-7">
                      <svg xmlns="http://www.w3.org/2000/svg"
                          class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                          fill="currentColor">
                          <path fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clip-rule="evenodd" />
                      </svg>
                      <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Selecciona un archivo</p>
                  </div>
                  <input type="file" class="opacity-0" />
              </label>
          </div>
      </div>
      <div class="flex p-2 space-x-4 justify-end w-full">
        <button class="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Cancelar</button>
        <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Guardar Producto</button>
      </div>
      </form>
    </div>
  );
};

export default addProduct;