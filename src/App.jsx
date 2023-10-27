import { useState, useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./components/NotFound/NotFound";
import LazyLoadTabContent from "./components/LazyLoadTabContent/LazyLoadTabContent";

function App() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    fetch("/tabs.json")
      .then((response) => response.json())
      .then((data) => {
        setTables(data);
      });
  }, []);

  return (
    <>
      <header>
        <Navigation tables={tables} />
      </header>

      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route
            path={`/`}
            element={<Navigate to={tables[0]?.id} replace={true} />}
          ></Route>

          {tables.map(({ id, path }) => (
            <Route
              key={id}
              path={`/${id}`}
              element={<LazyLoadTabContent path={`${path}`} />}
            />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
