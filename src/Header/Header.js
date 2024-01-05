import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux'
import Menu from '@mui/material/Menu';
import { remove } from '../redux/Actions/Actions';




const Header = ({search,setsearch}) => {


    

  

    const getdata = useSelector((state) => state.reducers.cards)


    const [price,setprice] =useState(0)
    // console.log(price)


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch =  useDispatch()


    function del(id){

        dispatch(remove(id))
    }


    function total() {
        let price = 0

        getdata.map((val)=> {
        price = val.price * val.quantity + price
       
        setprice(price)
    })
    }

    useEffect(()=>{
        total()
    },[total])





    // console.log(getdata)
    return (
        <div>
            <div className='nav'>
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/mens">Mens</Link></li>
                        <li><Link to="">Womens</Link></li>
                    </ul>
                </div>


                <div className="search">
                    <input placeholder='Search...' type="search" value={search}  onChange={(e)=>setsearch(e.target.value)} />
                </div>
                <div className="icon">


                    <Badge badgeContent={getdata.length} color="primary">

                        <i
                            className="fa-solid fa-cart-shopping"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}

                        ></i>
                    </Badge>

                </div>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?

                        <div className='carditem1'>
                        <h1>your cart</h1>
                        <div >
                            {
                                getdata.map(function (val) {
                                    return (
                                        <div className="cartitemflex" key={val.id}>
                                            <div className="carditemimg" >
                                                <Link to={`/cart/${val.id}`}  >
                                                <img src={val.imgurl} onClick={handleClose} alt="" />
                                                </Link>
                                            </div>
                                            <div className="cartdecs">
                                                <p>{val.watchname}</p>

                                                <p>Price :- {val.price}</p>
                                                <p>Type:- {val.desc}</p>
                                                <p>Quantity : - {val.quantity}</p>
                                            </div>
                                            <div className="deleteicon">
                                            <i className="fa-solid fa-trash" onClick={()=>del(val.id)}></i>

                                            </div>


                                        </div>
                                    )
                                })
                            }



                        </div>

                        <p>Toatal:- {price}</p>





                    </div>
                        
                        :
                        <div className='carditem'>
                        <i className="fa-solid fa-xmark" onClick={handleClose}></i>
                        <p>Card is empty</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVZ3sU_FjNWLh8uASOfQLTzgsI669zQZ87w&usqp=CAU" alt="" />

                    </div>

                    }

                    

                </Menu>









            </div>
        </div>
    )
}

export default Header