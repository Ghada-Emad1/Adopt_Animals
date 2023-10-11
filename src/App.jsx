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
    <AdoptAnimalPetContext.Provider value={AdoptPet}>
      <QueryClientProvider client={queryclient}>
        <div
          className="p-0 m-0"
          style={{
            background:
              "url(https://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
          }}
        >
          <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 ">
            <Link className="text-6xl text-white hover:text-gray-200 " to="/">
              Adopt Me!ee
            </Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParam />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </AdoptAnimalPetContext.Provider>
  );
}

export default App;
