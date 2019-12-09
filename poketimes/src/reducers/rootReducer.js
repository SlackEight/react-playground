const initState = {
  posts: [
    {id: '1', title: 'Pikachu realized it could evolve', 'body': 'Seems he didn\'t want to'},
    {id: '2', title: 'I refuse', body: 'To write all this latin. I get the point reeee.'},
    {id: '3', title: 'Magikarp learns hydro pump', body: 'Betcha didn\'t expect that didya.'},
    {id: '4', title: 'Bing bing bong', body: 'Bong bong bing bang'}
  
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer