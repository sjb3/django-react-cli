import React from "react";
import { Form, Input, Button } from "antd";

import axios from "axios";

export default class CustomForm extends React.Component {
  handleFormSubmit = (evt, requestType, articleID) => {
    // evt.preventDefault();
    const title = evt.target.elements.title.value;
    const content = evt.target.elements.content.value;
    // console.log(title, content);
    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/", {
            title,
            content
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => console.err(err));
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title,
            content
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => console.err(err));
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={evt =>
            this.handleFormSubmit(
              evt,
              this.props.requestType,
              this.props.articleID
            )
          }
        >
          <Form.Item label="Title">
            <Input name="title" placeholder="Put a title" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Enter Content ..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
