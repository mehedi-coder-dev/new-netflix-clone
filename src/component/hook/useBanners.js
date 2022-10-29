import { useEffect, useState } from "react";
import axios from "../axios";


export default function useBanners(fetching) {
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await axios.get(fetching);
        setLoading(false);
        const ramdomIndex = Math.floor(Math.random() * response.data.results.length);
        setResult(response.data.results[ramdomIndex]);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchData();
  }, [fetching]);

  return {
    loading,
    Error,
    result,
  };
}
