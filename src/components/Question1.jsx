import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Question1() {
  //Question 1:
  //You have a React component that needs to fetch data from an API when it is first rendered and display the data on the page. Write the functional component for this, including the API fetch logic. Assume the API endpoint is https://api.example.com/data. Handle loading and error states.

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
