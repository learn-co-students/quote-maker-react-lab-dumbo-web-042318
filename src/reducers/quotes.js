export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return [...state.filter(quote => quote.id !== action.quoteId)]
    case 'UPVOTE_QUOTE':
      let upcopy = [...state]
      upcopy.find((quote) => quote.id === action.quoteId).votes++
      return [...upcopy]
    case 'DOWNVOTE_QUOTE':
      let downcopy = [...state]
      let quote = downcopy.find((quote) => quote.id === action.quoteId)
      if (quote.votes === 0) {
        return [...downcopy]
      } else {
        quote.votes--
        return [...downcopy]
      }
    default:
    return state;
  }
}
