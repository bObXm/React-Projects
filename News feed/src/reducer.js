import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return{...state, isLoading: false, hits:action.paylaod.hits, nbPages:action.paylaod.nbPages}
    case REMOVE_STORY:{
      return {...state, hits:state.hits.filter((story)=>{return story.objectID !==action.paylaod})}}
    case HANDLE_SEARCH:
      return {...state, query:action.paylaod, page:0 }
    case HANDLE_PAGE:
      if(action.payload==='increase'){
        let nextPage=state.page+1
        if(nextPage>state.nbPages-1){
         nextPage=0
        }
        return{...state, page:nextPage}
      }
      if(action.payload==='decrease'){
        let prevPage=state.page-1
        if(prevPage<0){
         prevPage=state.nbPages-1
        }
        return{...state, page:prevPage}
      }
      
      default:
        throw new Error(`no matching '${action.type}' action type`)
  }
};
export default reducer;
