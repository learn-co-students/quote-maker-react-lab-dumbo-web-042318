import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {

  removeQuoteHandler = (e) => {
    // debugger;
    this.props.removeQuote(e.currentTarget.dataset.id)
  }

  upvoteQuoteHandler = (e) => {
    // debugger;
    this.props.upvoteQuote(e.currentTarget.dataset.id)
  }

  downvoteQuoteHandler = (e) => {
    // debugger;
    this.props.downvoteQuote(e.currentTarget.dataset.id)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => < QuoteCard key={quote.id} 
              quote={quote} 
              removeQuote={this.removeQuoteHandler}
              upvoteQuote={this.upvoteQuoteHandler}
              downvoteQuote={this.downvoteQuoteHandler}
              /> )}
              {/* 
                TODO: 

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, { upvoteQuote, downvoteQuote, removeQuote })(Quotes);