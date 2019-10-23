import State from './state'

export default (prevState = State, action)=>{
  let newData = JSON.parse(JSON.stringify(prevState))
  let {type,params} = action
  switch (type) {
    case 'CHANGE_TOKEN_MODEL':
      newData.tokenModel = params
      break;
  
    default:
      break;
  }
  return newData
}