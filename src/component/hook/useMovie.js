import { useEffect, useState } from "react";
import axios from "../axios";

export default function useMovie(fetching) {
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setError("");
        setLoading(true);
        const response = await axios.get(fetching);
        setLoading(false);
        setResult(response.data.results);
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
