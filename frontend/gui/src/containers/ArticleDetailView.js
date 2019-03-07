import React, { Component } from "react";
import axios from "axios";

import CustomForm from "../components/Form";
import { Button, Card } from "antd";

export default class ArticleDetail extends Component {
  state = {
    article: {} // only 1 article
  };

  componenetDidMount() {
    const articleID = this.props.match.params.articleID;
    axios
      .get(`http://127.0.0.1:8000/api/${articleID}`)
      .then(res => {
        this.setState({
          article: res.data
        });
        // console.log(">>>>>", res.data);
      })
      .catch(err => {
        console.err(err);
      });
  }

  handleDelete = evt => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
    this.props.histry.push("/");
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
        </Card>
        <CustomForm
          requestType="put"
          articleID={this.props.match.params.articleID}
          btnText="Update"
        />
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}
