import { SearchParam } from "./components/SearchParam";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdoptAnimalPetContext } from "./contexts/AdoptAnimalPetContext";
import Details from "./components/Details";
import { useState } from "react";
function App() {
  const AdoptPet = useState(null);
  //console.log(AdoptPet)
  const queryclient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  return (
    <BrowserRouter>
      <AdoptAnimalPetContext.Provider value={AdoptPet}>
        <QueryClientProvider client={queryclient}>
          <div>
            <header>
              <Link to="/">Adopt Me!ee</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParam />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </AdoptAnimalPetContext.Provider>
    </BrowserRouter>
  );
}

export default App;
