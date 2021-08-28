import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    //if the tour id does not matches to id then it will go to new array
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  //useEffect will be used when component is goinng to invoke
  useEffect(() => {
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours Left</h2>
          <button
            className="btn"
            onClick={() => {
              fetchData();
            }}
          >
            Load All{" "}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
