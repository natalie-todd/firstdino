import React from 'react';

const ListItems = (props) => {
  console.log(props)
      return (
        <li>
            {/* //will need to double check on 'listUrl' selection */}
          {props.listUrl}
        </li>
    );
  }

export default ListItems;