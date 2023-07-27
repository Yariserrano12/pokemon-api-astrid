import React from "react";


import { Izquierda, Derecha} from "../info/index";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        <div className="icon">
          <Izquierda />
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
        <div className="icon">
          <Derecha />
        </div>
      </button>
    </div>
  );
};

export default Pagination;