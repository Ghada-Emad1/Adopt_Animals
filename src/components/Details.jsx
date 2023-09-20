import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FetchPet } from "../Api/FetchPet";

export const Details = () => {
  const { id } = useParams();
  const Result = useQuery(["details", id], FetchPet);
  //console.log(Result)
  if (Result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  if (Result.isError) {
    return (
      <div>
        <h1>Can't get data</h1>
      </div>
    );
  }
  //console.log(Result.data.pets);
  const pet = Result.data.pets[0];
  return (
    <div className="details">
      <img
        src={pet.images[0]}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <h1>{pet.name}</h1>
      <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}`}</h2>
      <button>Adopt {pet.name}</button>
      <p>{pet.description}</p>
    </div>
  );
};
