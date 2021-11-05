
const initialState = {
    videos: [],
    watchLater: []
  };
  // action -> {type: "ABC", payload: 2}
  const videosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
   
      case "SET_VIDEOS":
        return {
            videos: payload,
            watchLater: state.watchLater
        };
        case "WATCH_LATER":
            // the payload is an object
            const videoList = state.watchLater.slice()
            console.log(videoList.length);
            let x=false;
          for (let i=0;i<videoList.length;i++){
              if(videoList[i].channelId === payload.channelId){
                  x=true
                  alert("The video already exists")
                  break;
              }  
        }
        if(x === false){
            videoList.push(payload)
        }
        
           
            return {
                videos: state.videos,
                watchLater: videoList,
            };
        //    deleteWatchLater
        case "DELETE_WATCHLATER":
            return {
                videos: payload,
                watchLater: state.watchLater.filter((element) => {
                    return element.channelId !== payload.channelId;
               
                }),
            };
      default:
        return state;
    }
  };
  
  export default videosReducer;
  