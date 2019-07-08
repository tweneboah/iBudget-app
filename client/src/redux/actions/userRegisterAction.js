import axios from 'axios';

export  const createUsers = (values) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    console.log('Action was called')
    return function(dispatch) {
        axios.post('/api/users', values)
        .then((res) => {
            console.log(res)
            return dispatch({
                type: 'CTREATE_USER',
                payload: res.data
            })
        })
  
    }
    
  }
