import { Component } from "react";

export class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      //every thing in DOM is a string (active is string) so we add + to make it number
      active: +event.target.dataset.index,
    });
    console.log(event.target.dataset.index);
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="flex flex-col justify-center items-center gap-10   mx-auto rounded-lg">
        <img src={images[active]} alt="animal" className=" sm:max-w-[300px] max-h-[300px] " />
        <div className=" grid grid-cols-2 items-center justify-center gap-2 sm:flex sm:items-center sm:justify-center">
          {images.map((photo, index) => (
            <img
              src={photo}
              key={photo} 
              alt="animal thumbnail"
              className={index === active ? "active" : "w-[100px] h-[100px] rounded-full inline-block m-[15px] cursor-pointer border border-orange-300 "}
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}
