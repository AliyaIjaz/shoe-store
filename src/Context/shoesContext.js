import React, { createContext, useState } from 'react';

let shoeList=[];
export const ShoeContext = createContext(shoeList);

const ShoeContextProvider = (props) => {
    const [shoeList, setShoeList] = useState([
        {url:"shoe image url", name:"shoeName1", id:"1"},
        {url:"second url", name:"shoeName2", id:"id"}
    ]);
    const addShoe = (url,name,id) => {
        setShoeList([...shoeList, {url,name,id}]);
    };

    const removeShoe = (id) => {
        setShoeList(shoeList.filter(shoe=>shoe.id !==id));
    };

    return(
        <ShoeContext.Provider value={{
            shoeList: shoeList,
            addShoe: addShoe,
            removeShoe: removeShoe
            }}>
            {props.childern}
        </ShoeContext.Provider>
    )
}


export default ShoeContextProvider;