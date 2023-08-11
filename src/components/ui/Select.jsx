import SelectCategories from "./SelectCategories";
import Serch from "./Serch";

const Select = ({ categoriesdata }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
       <SelectCategories categoriesdata={categoriesdata}></SelectCategories>
       <Serch></Serch>
      </div>
    </div>
  );
};

export default Select;
