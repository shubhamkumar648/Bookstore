import React from 'react'
import { useParams } from 'react-router';
import { bookData } from '../bookdata';

const SingleProdcard = () => {
    const {id} = useParams()
    const Singlebook = bookData.filter((item) => item.id === Number(id));
    console.log(Singlebook,"singlebook");
  return (
<>
    <h2>Single Product Page</h2>
 <hr />
    <div style={{ display: "flex", justifyContent: "center" , alignItems: 'center'}}>
        
    {Singlebook.map((item) => {
      return (
        <>
          <div
            key={item.id}
            style={{
              height: "15rem",
              width: "15rem",
              borderRadius: "10%",
              border: "1px solid blue",
            }}
            className="gap-3"
          >
            <h2>{item.title} </h2>
            <p>{item.author}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        </>
      );
    })}
    </div>
  </>
  )
}

export default SingleProdcard
