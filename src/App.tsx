import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Loading from "./layout/Loading";
import { getAllHeadlineNews } from "./services/fetchNewsData";



function App() {
  const { isLoading, data } = useQuery(
    "news",
    getAllHeadlineNews
  );

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={!isLoading && data ? <Home articles={data} /> 
          : <Loading />}
          
        />
      </Routes>
    </>
  );
}

export default App;
