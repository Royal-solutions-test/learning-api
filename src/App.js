import logo from "./logo.svg";
import { useEffect } from "react";

import "./App.css";
import axios from "axios";
import { useState } from "react";
function App() {
  const [property, setProperty] = useState([]);
  const fetchData = async () => {
    try {
      const apiCall = await axios.get(
        "http://192.168.43.156:6414/api/v1/property/29"
      );
      console.log(apiCall);

      if (apiCall.data.data) {
        setProperty(apiCall.data.data);
      } else {
        console.log("NO data");
      }
    } catch (err) {
      console.log(err.response);
      // return err.response;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        {property.map((p, index) => {
          // if (p.)
          return (
            <>
              <h1> {p.j_title}</h1>

              <h2>
                {p.Plots && p.Plots.length > 0 ? (
                  p.Plots.map((plot) => <p> {plot.j_city}</p>)
                ) : (
                  <p> there is no plot for this estate</p>
                )}
              </h2>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
