const intialstate = {
    cards: []

}


const reducers = (state = intialstate, action) => {

    switch (action.type) {
        case "Add_to_cart":

            let cardindex = state.cards.findIndex((item) => item.id === action.payload.id)


            if (cardindex >= 0) {
                state.cards[cardindex].quantity += 1
            }
            else {
                let data = {...action.payload,quantity: 1 }
                return {
                    ...state,
                    cards: [...state.cards,data]
                }
            }





        case "Remove_cart":


            let data = state.cards.filter((val) => val.id !== action.payload)

            return {
                ...state,
                cards: data

            }


        case "desc1" :
            let desccardindex = state.cards.findIndex((item) => item.id === action.payload.id)


            if(state.cards[desccardindex].quantity >= 1 ){
                state.cards[desccardindex].quantity -= 1

                return {
                    ...state,
                    cards: [...state.cards]
                }

            }

            else if(state.cards[desccardindex].quantity === 1 ){
                let data = state.cards.filter((val) => val.id !== action.payload)

                return {
                    ...state,
                    cards: data
    
                }


            }






        default:
            return state;
    }

}


export default reducers