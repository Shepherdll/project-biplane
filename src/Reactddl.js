import React from 'react';
import Select from 'react-select';

const planes = [
    { label : 'Bf 109'},
    { label : 'Bv 138'}
]

function PlaneDropDownList ()
{
    return <Select options={planes}></Select>
}

// const domContainer = document.querySelector('#search1');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e(reactddl));

export default PlaneDropDownList;