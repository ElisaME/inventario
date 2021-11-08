import Link from 'next/link'
import menu from './../../utils/menu'
import { useRouter } from 'next/router'

export default function Sidebar () {
  const router = useRouter()
  return(

    <div class="flex flex-col w-64 h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Inventario</h2>

        <div class="flex flex-col items-center mt-6 -mx-2">
            <img class="object-cover w-24 h-24 mx-2 rounded-full" src="/images/inventory.png" alt="avatar"/>
            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">Administrador</h4>
            <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">admin@example.com</p>
        </div>
        
        <div class="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {menu.map((item, index) => {
                return(
                  <Link 
                    key={index}
                    class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
                    href={item.url}>
                    
                    <a class={`flex items-center px-4 py-2 text-gray-700 ${
                      router.asPath === item.url
                      ? "text-blue-500 bg-gray-200"
                      : "text-secondary-300"
                    }`}>
                      <span class="mr-1">{item.icon}</span>
                      <span class="mx-4 font-medium">{item.label}</span>
                    </a>                      
                  </Link>
                )
              })}
            </nav>
        </div>
    </div>
  )
}