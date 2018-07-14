import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { bindActionCreators } from 'redux';
import { removeQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    console.log(this.props);
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
              {this.props.quotes.map(quote => {
                return <QuoteCard quote={quote} removeQuote={this.props.removeQuote} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote: removeQuote
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
