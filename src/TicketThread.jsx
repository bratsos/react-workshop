import React from 'react';
import {getDateNow} from './modules/common';

class TicketThread extends React.Component {
  static defaultProps = {
    arrayOfTickets:  [{
      type: 'question',
      date: '19/11/2017 12:54',
      text: 'Παρακαλώ ενημερώστε με για την πορεία του ticket. Ευχαριστώ.'
    }]
  }

  constructor(props) {
    super(props);

    this.state = {
      arrayOfTickets: props.arrayOfTickets,
      isDisabled: true
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', (e) => {
      if (e.which === 13) { // enter
        this.addAnswer(e);
      }
    });
  }

  render() {
    const { arrayOfTickets, isDisabled } = this.state

    return (
      <div className="tickets-container card">
        <div className="ticket">
          {/* render the TicketItems (questions and answers) that have been already added */}
          <div className="answer-button">
            <a className="form-expand-button">
              <span className="expand-collapse">+</span>
              Απάντηση
            </a>
          </div>
        </div>
        <div className="answer-wrapper clearfix">
          <textarea className="right"
                    value=""
                    placeholder="Συμπληρώστε την απάντησή σας"
          /> {/* we should keep the typed text somewhere, in order to handle the answer, when submitted */}
          <button disabled={isDisabled}
                  id="add-answer-btn"
                  className="right"
          >
            Αποστολή
          </button>
        </div>
      </div>
    )
  }
}

export default TicketThread;
