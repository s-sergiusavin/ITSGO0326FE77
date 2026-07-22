import { useEffect, useState } from "react";

const useFetch = (url) => {
    const apiConfig = {
        headers: {
            'x-api-key': 'free_user_3Ex0RLGjQgptLlFTpJkPhoxoqKP'
        }
    };

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url, apiConfig).then(response => {
            return response.json()
        }).then(data => {
            setData(data)
        })
    }, [url]);

    return data;

}

export default useFetch;