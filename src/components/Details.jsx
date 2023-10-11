import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { FetchPet } from "../Api/FetchPet";
import { Carousel } from "./Carousel";
import { ErrorBoundary } from "../Errors/ErrorBoundary";
import { useState, useContext } from "react";
import { Modal } from "./Modal";
import { AdoptAnimalPetContext } from "../contexts/AdoptAnimalPetContext";

const Details = () => {
  //use Naviate
  const Navigate = useNavigate();

  const [, setAdoptedPet] = useContext(AdoptAnimalPetContext);
  //add showModal
  const [showModal, setshowModal] = useState(false);

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
    <div className="p-10">
      <Carousel images={pet.images} />
      <div className="flex flex-col items-center justify-center bg-orange-300  mt-9 gap-3 font-bold w-full sm:w-3/4 mx-auto p-5 rounded-lg">
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}`}</h2>
        <button onClick={() => setshowModal(true)} className="bg-orange-600 px-3 sm:px-6 py-2 sm:py-2 rounded">Adopt {pet.name}</button>
        <p className="text-center">{pet.description}</p>
        {showModal ? (
          <Modal>
            {/* children of Modal */}
            <div className="bg-white w-[300px] sm:w-[600px] text-center p-5 rounded-lg h-[200px] flex flex-col items-center justify-center">
              <h1>Would You Like to Adopt {pet.name}?</h1>
              <div className="flex items-center justify-center gap-5 mt-5">
                <button className="button"
                  onClick={() => {
                    setAdoptedPet(pet);
                    Navigate("/");
                  }}
                >
                  Yes
                </button>
                <button className="button" onClick={() => setshowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};
function DetailsErrorBoundary(props) {
  <ErrorBoundary>
    <Details {...props} />
  </ErrorBoundary>;
}

export default Details;
