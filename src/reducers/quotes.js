export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      // console.log(action.quote)
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      console.log(state)
      // console.log(state.quotes)
      const quote = state.find(quote => quote.id === action.quoteId)
      const index = state.indexOf(quote)
      // const copyState = [...state]
      // copyState.splice(index, 1)
      // console.log(copyState)
      return [...state.slice(0, index), ...state.slice(index + 1) ]
    case 'UPVOTE_QUOTE':  
    // console.log(action.quoteId)
      const newQuote = state.find(quote => quote.id === action.quoteId)
      const updatedQuote = Object.assign({}, newQuote, {votes: newQuote.votes + 1})
      // console.log(updatedQuote)
      const newIndex = state.indexOf(newQuote)
      const newCopyState = [...state]
      newCopyState.splice(newIndex, 1, updatedQuote)
      return [...newCopyState]
    case 'DOWNVOTE_QUOTE':
    // console.log(action.quoteId)
      const newNewQuote = state.find(quote => quote.id === action.quoteId)
      if (newNewQuote.votes > 0) {
        const downvoteQuote = Object.assign({}, newNewQuote, {votes: newNewQuote.votes - 1})
        const newNewIndex = state.indexOf(newNewQuote)
        const newNewCopyState = [...state]
        newNewCopyState.splice(newNewIndex, 1, downvoteQuote)
        return [...newNewCopyState]
      } else {
        return state
      }
    default:
      return state;
  }
}