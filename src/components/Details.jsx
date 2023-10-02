import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FetchPet } from "../Api/FetchPet";
import { Carousel } from "./Carousel";
import { ErrorBoundary } from "../Errors/ErrorBoundary";
import { useState } from "react";
import { Modal } from "./Modal";

const Details = () => {
  //add showModal
  const [showModal,setshowModal]=useState(false);

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
      <Carousel images={pet.images} />
      <h1>{pet.name}</h1>
      <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}`}</h2>
      <button onClick={()=>setshowModal(true)}>Adopt {pet.name}</button>
      <p>{pet.description}</p>
      {showModal?(<Modal>
        {/* children of Modal */}
        <div>
          <h1>Would You Like to Adopt {pet.name}?</h1>
          <div className="buttons">
            <button>Yes</button>
            <button onClick={()=>setshowModal(false)}>No</button>
          </div>
        </div>
      </Modal>):null}
    </div>
  );
};
function DetailsErrorBoundary(props) {
  <ErrorBoundary>
    <Details {...props}/>
  </ErrorBoundary>;
}

export default Details;
