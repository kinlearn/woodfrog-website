import { FunctionComponent } from "react";
import styles from "./Searchbar.module.css";
import { BsSearch } from "react-icons/bs";

export type SearchType = {
  className?: string;
};

const Searchbar: FunctionComponent<SearchType> = ({ className = "" }) => {
  return (
    <div className="row mx-0 mt-5 w-100" >
      <div className="col-12 offest-3 col-xs-6 offset-xs-3 col-md-5 offset-md-3 col-lg-5 col-xl-3 offset-xl-4 p-0">
        <div className="input-group">
          <span className="input-group-text"> 
            <BsSearch />
          </span> 
          <input type="text" className={['form-control', styles.myinput].join(' ')} placeholder="Search" aria-label="Search" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
