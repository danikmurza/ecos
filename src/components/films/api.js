import React from "react";

export default class Api extends React.Component{

    state = {
        actors: null,
        awards: null,
        title: null

    }

    _apiBase = 'http://www.omdbapi.com/?apikey=cbcc41d6&t=';


    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getNameFilms = async (name) => {
        const res = await this.getResource(name);
        return res
    };



    render() {
        console.log(this.getNameFilms('it'))
        return(
          <div>
              <h1>
                  hi
              </h1>
          </div>
        );
    }
}




