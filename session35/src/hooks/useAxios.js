import { useState, useCallback } from "react";
import axios from "axios";

const useAxios = (baseURL = "") => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(
        async ({ url, method = "get", data = null, params = null, config = {} }) => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.request({
                    baseURL,
                    url,
                    method,
                    data,
                    params,
                    ...config,
                });

                return response.data;
            } catch (requestError) {
                setError(requestError);
                throw requestError;
            } finally {
                setLoading(false);
            }
        },
        [baseURL]
    );

    return {
        loading,
        error,
        request,
    };
};

export default useAxios;
