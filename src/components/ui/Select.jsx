import SelectCategories from "./SelectCategories";
import Serch from "./Serch";

const Select = ({ categoriesdata,onchangebycategory }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
       <SelectCategories categoriesdata={categoriesdata} onchangebycategory={onchangebycategory}></SelectCategories>
       <Serch></Serch>
      </div>
    </div>
  );
};

export default Select;
