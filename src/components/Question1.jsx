import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Question1() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    //const testurl = api.example.com / data;
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div> unable to fetch data :{error}</div>;
  return (
    <div>
      <h1>Title:</h1>
      <p>{data.title}</p>

      <h2>Body:</h2>
      <p>{data.body}</p>
    </div>
  );
}
