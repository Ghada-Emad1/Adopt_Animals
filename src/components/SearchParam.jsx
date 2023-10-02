import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import useBreedList from "../hooks/useBreedList";
import { Result } from "./Result";
import { useQuery } from "@tanstack/react-query";
import { FetchSearch } from "../Api/FetchSearch";

const animals = ["dog", "cat", "rabbit", "bird"];
export const SearchParam = () => {
  const [requestParams, setrequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setanimal] = useState("");
  const [Breeds] = useBreedList(animal);
  
  const results = useQuery(["search", requestParams], FetchSearch);
  const pets = results?.data?.pets ?? [];
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            location: formData.get("location") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setrequestParams(obj);
        }}
      >
        <label htmlFor="location">
          <input name="location" id="location" placeholder="Your Location" />
        </label>
        <label htmlFor="animal">
          <select
            id="animal"
            name="animal"
            value={animal}
            onChange={(e) => setanimal(e.target.value)}
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
          <select name="breed" id="breed" disabled={Breeds.length === 0}>
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
