import { Component } from "react";
import { Link } from "react-router-dom";

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerviedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    //typically you would log this to something like TrackJS
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing
          <Link to="/">Click here to go back to the home page</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}
