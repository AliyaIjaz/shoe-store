import React, { createContext, useState } from 'react';

let shoeList=[];
export const ShoeContext = createContext(shoeList);

const ShoeContextProvider = (props) => {
    const [shoeList, setShoeList] = useState([{}]);

    const addShoe = (url,name,id) => {
        setShoeList([...shoeList, {url:url, name:name, id:id}]);
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
            {props.children}
        </ShoeContext.Provider>
    )
}


export default ShoeContextProvider;
