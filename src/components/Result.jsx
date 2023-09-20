import { Pet } from "./Pet";

export const Result = ({ pets }) => {
  //console.log(pets);
  return (
    <div className="search">
      {pets.length ? (
        pets.map((pet) => {
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              location={`${pet.location}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};
