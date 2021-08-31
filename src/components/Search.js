/** @format */

import React from "react";
import "../Style/Search.css";
const Search = () => {
  return (
    <form class="mb-3">
      <div class="row">
        <div class="col-9">
          <input
            type="search"
            className="form-control"
            placeholder="type a city ..."
          />
        </div>
        <div class="col-3">
          <input type="submit" class="btn btn-primary w-100 " value="Search" />
        </div>
      </div>
    </form>
  );
};
export default Search;
