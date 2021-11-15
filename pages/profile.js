import React, { useEffect, useState} from 'react';
import axios from 'axios'

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('http://radiant-ridge-01211.herokuapp.com/user')
//   const user = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       user:res,
//     },
//   }
// }

function profile () {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    getUser()
  },[])

  const getUser = async () => {
  var data = JSON.parse(localStorage.getItem('userInventario'))
  setUserData(data.user)
  console.log('en perfil', data.user)
  }

  return (
    <div className="flex w-full mt-3 justify-start">
      <div className="w-1/4 m-3 p-2 bg-white rounded-md">
        <img src={userData.image} className="w-1/2"/>
        <p className="font-bold">Datos del usuario:</p>
        <p>Nombre: {userData && userData.name}</p>
        <p>Email: {userData && userData.email}</p>
      </div>
    </div>
  );
};

export default profile;