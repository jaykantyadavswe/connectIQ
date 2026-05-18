import { useRouter } from 'next/navigation';
import React, {useEffect} from 'react'

function dashboard() {
    const router = useRouter();

    useEffect(() => {
      if(localStorage.getItem("token") === null){
        router.push("/login");
      }
    })
    
  return (
    <div>dashboard</div>
  )
}

export default dashboard