
export const sortBypriceutils = (cartItems,displayData) => {
    if (cartItems === 'priceLowToHigh') {
        const result1 =   displayData.sort((a, b) => a.price - b.price);
        console.log(result1,"low_to_High");
       
       } else if (cartItems === 'priceHighToLow') {
          const result2 =   displayData.sort((a, b) => b.price - a.price);
          console.log(result2,"high_to_low")
        
       }
}
