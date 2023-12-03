import React from 'react'

import Multiselect from 'multiselect-react-dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
  multiselectContainer: {


  },
  searchBox: {

    border: 'none',
    fontSize: '15px',
    minHeight: '50px',
    border: "1px solid #BCE2D8",


  },
  inputField: {

    margin: '5px',
    color: "#6C757D",
    fontWeight: '700',

  },
  chips: {

    background: "#ECF1F5",
    // borderRadius: '1px'
    fontWeight: '700',
    border: "1px solid #BCE2D8",
    color: "#6C757D",
    padding: "10px",




  },
  optionContainer: {

    border: '2px solid',

    border: "1px solid #ddd",

  },
  option: {

    fontWeight: '700',
    color: '#6C757D',
    background: '#FFF',
    cursor: 'pointer',

    '&:hover': {
      // Option color on hover state
      background: 'red',
      color: "blue"
    },


  },

  groupHeading: {


  }
};



const FilterOne = ({ filterTitle, dataArray }) => {

  const options = dataArray.map((item) => item.name)

  const customCloseIcon = <FontAwesomeIcon icon={faTimes} className="custom-close-icon crossicon" />;
  return (

    <div className='row py-1 '>

      <p className='py-2 filter-title'>{filterTitle}</p>


      <Multiselect

        customCloseIcon={customCloseIcon}
        style={customStyles}
        isObject={false}
        onKeyPressFn={function noRefCheck() { }}

        onRemove={(event) => {
          console.log("onRemove", event);
        }}
        onSearch={(event) => {
          console.log("onSearch", event);
        }}
        onSelect={(event) => {
          console.log("onSelect", event);
        }}
        options={options}
      />



    </div>
  )
}

export default FilterOne