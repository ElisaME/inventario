import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

const login = () => {
  const router = useRouter()
  const [user, setUser] = useState({})

  const handleInput = (e) => {
    const {name, value} = e.target
    setUser(prevState => ({
      ...prevState,
      [name]:value
    }))
  }

  const logInAccount = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('https://radiant-ridge-01211.herokuapp.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          email:user.email,
          password:user.password
        }),
      })
      const data = await res.json()
      if (data.user){
        localStorage.setItem('userInventario', JSON.stringify(data));
        router.push('/')
      }
    } catch (error) {
      console.log('aquiii', error)
      alert('Error al iniciar sesión')
    }
  }

  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Entra a tu cuenta
          </h2>
        </div>
        <form class="mt-8 space-y-6" onSubmit={logInAccount}>
          <input type="hidden" name="remember" value="true"/>
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Correo electrónico</label>
              <input onChange={handleInput} id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
            </div>
            <div>
              <label for="password" class="sr-only">Contraseña</label>
              <input onChange={handleInput} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
            </div>
          </div>
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                
                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
