import  {ADD_COMMENT} from '../constants'

export default store => next => action => {
    switch (action.type){
        case ADD_COMMENT:
            console.log("IDGEN");
            next({
                ...action,
                payload: {
                    ...action.payload,
                    id: Date.now() // не уверен что это подходит
                }
            })
            break;

        default:
            next(action);
    }
}
