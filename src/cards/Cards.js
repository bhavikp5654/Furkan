import React, { useState } from 'react'
import './Cards.css'

import Cardsdata from '../Cardsdata/Cardsdata';
import {useDispatch, useSelector} from 'react-redux'
import { add } from '../redux/Actions/Actions';



const Cards = ({search}) => {

  // console.log(search.toLowerCase())

  const[data,setdata] =useState(Cardsdata);

  // const [noofelm , setnoofelm] = useState(4)
  // const slice = data.slice(0,noofelm)

let filtereddata=   data.filter((val)=>val.watchname.toLowerCase().includes(search.toLowerCase()))
// console.log(filtereddata)





 const getdata =  useSelector((state)=>state.reducers.cards)

 console.log(getdata)



 const dispatch =  useDispatch()

 function send(e){
  dispatch(add(e))

 }

//  function loadmore(){
//   setnoofelm(noofelm + noofelm)

  
//  }






  // console.log(data)
  return (
    <div className="adjust">

    
    
    <div className='grid' id='grid'>


      {
        filtereddata.map( function (val){
          return(
            <div className="card" key={val.id}>
              <div className="img">
                <img src={val.imgurl} alt="" />
              </div>
              <div className="desc">
                <h3>{val.watchname}</h3>
                <p>MRP ₹ {val.price} </p>
                <p>Type:- {val.desc}</p>
              </div>
      
              <div className="btn">
                <button onClick={()=>send(val)}>Addtocart</button>
                <button >Buynow</button>          
      
              </div>
      
            </div>
          )
      
        })
      }
      
    </div>

    {/* <button style={{color:"red"}} onClick={loadmore}>View all</button> */}

    </div>

    
  )
}

export default Cards