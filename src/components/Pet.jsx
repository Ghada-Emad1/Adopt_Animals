import { Link } from "react-router-dom";
export const Pet = (props) => {
  const { name, animal, breed, images, location, id ,description} = props;
  //console.log(props)

  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 bg-gradient-to-tr from-white to-transparent w-full text-center">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
        <p className="para">{description}</p>
      </div>
    </Link>
  );
};
