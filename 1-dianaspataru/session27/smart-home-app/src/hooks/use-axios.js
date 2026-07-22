import axios from 'axios';
import { useEffect, useState } from 'react';

function useAxios (url){
    axios.headers = {
      "x-api-key": "free_user_3Ex0MOL80rYwgjm0xcTjDNMDfhn",
    }

    const [data, setData] =useState(null)
    const [loading, setLoading] =useState(false)
    const [error, setError] =useState(null)

    useEffect(()=>{
        setLoading('Loading...')
        axios.get(url).then( res => {
            setLoading(false)
            res.data.data && setData(res.data.data)
        })

        .catch(err => {
            setLoading(false)
            setData('error here')
        })
    },[url])

    return {data, loading, error}
}

export default useAxios