import React, { Component } from "react";
import Api from "./api";



export default class FilmsPage extends  Component {


    render() {
        return (
          <div className="page">
              <Api />
          </div>
        );
    }
};
