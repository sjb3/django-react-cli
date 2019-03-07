import React, { Component } from "react";
import axios from "axios";

import Articles from "../components/Article";
import CustomForm from "../components/Form";

export default class ArticleList extends Component {
  state = {
    articles: [] // store articles from API
  };

  componenetDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then(res => {
        this.setState({
          articles: res.data
        });
        // console.log(">>>>>", res.data);
      })
      .catch(err => {
        console.err(err);
      });
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <br />
        <h2>Create an article</h2>
        <CustomForm requestType="post" articleID={null} btnText="Create" />
      </div>
    );
  }
}
