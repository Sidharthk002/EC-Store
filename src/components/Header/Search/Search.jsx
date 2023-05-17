import React, { useState,useContext } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../utils/context";

const Search = ({ setSearchModal }) => {
    const {data} = useContext(Context);
    const [filterData,setFilterData] = useState([]);
    const [query,setQuery] = useState("")
    const navigate = useNavigate();
   
   const onChangeData = (e) => {
    setQuery(e.target.value)
    // console.log(query)
    const newFilterData = data.filter((item)=>{
       return item.title?.toLowerCase().includes(query.toLowerCase())
   }) 
    setFilterData(newFilterData);
   }
//    console.log(filterData)
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    onChange={onChangeData}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>
            
            <div className="search-result-content">
                <div className="search-results">
                        { filterData && filterData?.map((item,index)=>(
                            <div
                            className="search-result-item" key={index} onClick={()=>{
                                navigate(`/product/${item.id}`);
                                setSearchModal(false)
                            }}
                        >
                            <div className="image-container">
                                <img
                                    src={item.img}
                                    alt="imgContainer"
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.title}
                                </span>
                                <span className="desc">
                                   {item.desc}
                                </span>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
            
        </div>
    );
};

export default Search;
