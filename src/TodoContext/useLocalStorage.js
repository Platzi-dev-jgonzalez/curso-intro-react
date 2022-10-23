import React from "react";

function useLocalStorage(itemName,initialValue){
    const [error,setError] = React.useState(false);
  
    const [loading,setLoading] = React.useState(true);
    const [item, setItem]= React.useState(initialValue);
  
  React.useEffect(()=>{
    setTimeout(() => {
      try {
        const localStorageItem= localStorage.getItem(itemName);
        let ParsedItem;
      
      
        if(!localStorageItem){
          localStorage.setItem(itemName,initialValue);
          ParsedItem=initialValue;
        }else{
          ParsedItem = JSON.parse(localStorageItem)
         
        }
        setItem(ParsedItem)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
  
      
    }, 1000);
  })
  
  
  
    const saveItem = (newItem)=>{
      const stringfiledTodos= JSON.stringify(newItem);
      localStorage.setItem(itemName, stringfiledTodos);
      setItem(newItem);
  
    }
    return{
      item,
      saveItem,
      loading,
      error
    };
  }

  export {useLocalStorage}