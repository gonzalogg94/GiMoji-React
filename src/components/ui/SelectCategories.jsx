import React from "react";

const SelectCategories = ({ categoriesdata }) => {
  return (
    <div className="col-sm-4 pb-3">
      <select
        className="form-select bg-black text-bg-dark"
        aria-label="Default select example"
      >
        <option defaultValue={true}>Selecciona una Categoria</option>

        {categoriesdata.map((cate) => (
          <option key={cate.name} value={cate.gif.id}>
            {cate.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategories;
