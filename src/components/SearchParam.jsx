import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useBreedList from "../hooks/useBreedList";
import { Result } from "./Result";
import { Details } from "./Details";

const animals = ["dog", "cat", "rabbit", "bird"];
export const SearchParam = () => {
  const [location, setlocation] = useState("");
  const [animal, setanimal] = useState("");
  const [breed, setbreed] = useState("");
  const [pets, setpets] = useState([]);
  const [Breeds] = useBreedList(animal);
  useEffect(() => {
    requestApi();
  }, []);
  async function requestApi() {
    await axios
      .get(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      )
      .then((res) => {
        //console.log(res.data.pets)
        setpets(res.data.pets);
      });
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestApi();
        }}
      >
        <label htmlFor="location">
          <input
            value={location}
            id="location"
            placeholder="Your Location"
            onChange={(e) => setlocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setanimal(e.target.value);
            }}
          >
            <option />

            {animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            value={breed}
            id="breed"
            onChange={(e) => setbreed(e.target.value)}
            disabled={Breeds.length === 0}
          >
            <option />
            {Breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};
