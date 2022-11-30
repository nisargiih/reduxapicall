import { FATCH_DATA ,SUCESS_FATCH_DATA, ERROR_FATCH_DATA } from "../actions/const";
// ,SUCESS_FATCH_DATA, ERROR_FATCH_DATA

//  const initialstate = {
//     data :[]
// }

const counteReducer = (state = {data : {}}, action) => {
    switch (action.type) {
        case FATCH_DATA: {
            console.log('it is hit by FATCH_DATA')
            // console.log('from sucess reducer',action.responce)
            // console.log(state)
            return {
                ...state,
            }
        }
        case SUCESS_FATCH_DATA:{
            console.log('it is hit by SUCESS_FATCH_DATA ')
            console.log('from sucess reducer',action.data)
            var data = action.data
            // console.log(data.login)
            return{
                ...state,
                data,
            }
        }
        case ERROR_FATCH_DATA:{
            console.log("it is hit by ERROR_FATCH_DATA")
            return{
                ...state,
                data : {},
            }
        }
        default: {
            return {
                data : {}
            }
        }
    }
}

export default counteReducer;