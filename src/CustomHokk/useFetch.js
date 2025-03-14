import React from "react";
import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        console.log('does it calls again and again',url);
      const fetchData = async () => {
        try {
          let response = await fetch(url);
          let result = await response.json();
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [url]);
  
    return { data, loading, error };
  };

  export default useFetch;