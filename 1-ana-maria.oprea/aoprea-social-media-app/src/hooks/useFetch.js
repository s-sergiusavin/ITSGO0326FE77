import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json)
      .then((data) => setData(data));
  }, [url]);
};

export default useFetch;
