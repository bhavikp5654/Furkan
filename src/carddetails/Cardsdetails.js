import React, { useEffect, useState } from 'react'
import './Carddetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { add, decrement, remove } from '../redux/Actions/Actions';

const Cardsdetails = () => {

    const [data, setdata] = useState([])
    // console.log(data)

    const { id } = useParams();


    const getdata = useSelector((state) => state.reducers.cards)


    function compare() {

        let compareres = getdata.filter((val) => {
            return val.id == id
        })

        setdata(compareres)


    }

    useEffect(() => {
        compare()

    }, [id])
    const dispatch =  useDispatch()
    const navigate = useNavigate()

    function send(e){
    dispatch(add(e))

    }

    
    function desc(e){
        dispatch(decrement(e))
    
        }


        function del(id){

            dispatch(remove(id))
            navigate("/")

        }




    // console.log(id)


    return (
        <div className='carddetailsmain'>
            <h1>Cart's Page</h1>
            <div >
                {
                    data.map((val) => {
                        return (
                            <div className='carddetails' key={val.id}>
                                <div className="carddetailsimg">
                                    <img src={val.imgurl} alt="" />
                                </div>
                                <div className='carddetailsdesc'>
                                    <h2>{val.watchname}</h2>
                                    <h2>Price : - {val.price}</h2>
                                    <h4>Quantity :- {val.quantity}</h4>
                                    <h2>desc: - {val.desc}</h2>
                                    <div className="quant">
                                        <span onClick={val.quantity <= 1 ? ()=>del(val.id) : ()=>desc(val)}>-</span>
                                        <span>{val.quantity}</span>
                                        <span onClick={()=>send(val)}>+</span>

                                    </div>
                                    <h2>Total:- {val.price * val.quantity }</h2>

                                </div>

                            </div>

                        )
                    })
                }



            </div>

        </div>
    )
}

export default Cardsdetails