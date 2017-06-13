import React, { Component } from "react";
import { Cardsection } from "./common";
import { connect } from "react-redux";
import * as actions from"../actions";
import list from "../static/list_view.json"; 

class ListItem extends Component {

  render() {
    return (
      <CardSection>

      </CardSection>
    );
  }
}

export default connect(null, actions)(ListItem);
