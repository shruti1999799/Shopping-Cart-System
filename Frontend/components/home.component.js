import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
     
     <img src="https://scontent.fbom6-1.fna.fbcdn.net/v/t1.6435-9/106712288_107305141052386_2573773769271923994_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=6e5ad9&_nc_ohc=PJ59lYzdZv0AX-l3eKr&_nc_ht=scontent.fbom6-1.fna&oh=ed46c12c9fad3bdcec83c375abb30b7c&oe=617CE665" width="100%"/>
    );
    }
}
