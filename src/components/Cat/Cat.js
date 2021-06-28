import { Component } from "react";
import { Button } from "@material-ui/core";

const CAT_IMAGE_SRC =
  "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg";

export class Cat extends Component {
  render() {
    console.log({ props: this.props });
    return (
      <div>
        <h1>MR Cat</h1>
        <div>
          <img src={CAT_IMAGE_SRC} alt="cat" width="200" />
        </div>
        <Button variant="contained" onClick={this.props.history.goBack}>
          Play with the cat
        </Button>
      </div>
    );
  }
}
