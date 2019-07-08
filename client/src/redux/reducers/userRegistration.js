// const initialState = {
// name: '',
// email:'',
// password: ''
// };

// export default function(state = initialState, action) {

//  switch (action.type) {
  
//    case 'CTREATE_USER':

//      return action.payload
  
//    default:
//      return state;
//  }
// }


export default (state = [], action) => {
  //You can check the action that comes into this reducer
 switch(action.type){
       case 'FETCH_USERS':
         return action.payload
     default:
     return state
 }
}
