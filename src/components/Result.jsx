import { Pet } from "./Pet";

export const Result = ({ pets }) => {
  //console.log(pets);
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
