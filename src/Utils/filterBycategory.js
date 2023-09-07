import { bookData } from "../bookdata";


export const filterBycategory = (displayData) => {
   
      if(displayData === "Fiction") {
        const result = bookData.filter((item) => item.category === "Fiction");
             console.log(result);

      }
     else if(displayData === "Non Fiction") {
        const result = bookData.filter((item) => item.category === "Non Fiction");
             console.log(result);

      }

      else {
        const result = bookData.filter((item) => item.category);
        console.log(result);

      }
    
    }

