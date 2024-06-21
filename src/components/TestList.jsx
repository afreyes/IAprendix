import { useState, useEffect } from "react";

const TestList = () => {
  const [tests, setTests] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://nodebackend-vv0e.onrender.com/api/v1/test");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTests(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test List</h1>
      {tests.length === 0 ? (
        <p>No tests available</p>
      ) : (
        <ul>
          {tests.map((test) => (
            <li key={test.id}>
              <h2>{test.title}</h2>
              <p>{test.description}</p>
              {/* Puedes agregar más campos según tu estructura de datos */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestList;
