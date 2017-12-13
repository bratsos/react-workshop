import React from 'react';
import TicketItem from './TicketItem';
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
      expanded: false,
      answerTyped: '',
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

  addAnswer = (e) => {
    e.preventDefault();

    this.props.newNotification()

    const answerTyped = this.state.answerTyped.trim();
    const ticketData = {
      type: 'answer',
      date: getDateNow(),
      text: answerTyped
    };

    this.setState((prevState) => {
      return {
        arrayOfTickets : [...prevState.arrayOfTickets,ticketData],
        answerTyped: '',
        isDisabled: true
      }
    });
  }

  expandForm = (e) => {
    this.setState((prevState) => {
      return {
        expanded: !prevState.expanded
      }
    });
  }

  onAnswerChanged = (e) => {
    let btnDisabled = false;

    if (!e.target.value.trim().length) {
      btnDisabled = true;
    }

    this.setState({
        answerTyped: e.target.value,
        isDisabled: btnDisabled
    });
  }

  render() {
    const { arrayOfTickets, expanded, isDisabled, answerTyped } = this.state
    const ticketComponents = arrayOfTickets.map((ticket, index) => {
      return <TicketItem
                key={index}
                type={ticket.type}
                text={ticket.text}
                date={ticket.date}
                isLast={index === arrayOfTickets.length - 1 }
              />
    })

    return (
      <div className="tickets-container card">
        <div className="ticket">
          {ticketComponents}
          <div className="answer-button" onClick={(e) => this.expandForm(e)}>
            <a className={`form-expand-button ${expanded ? 'clicked' : ''}`}>
              <span className="expand-collapse">{expanded ? '-' : '+'}</span>
              Απάντηση
            </a>
          </div>
        </div>
        <div className={`answer-wrapper clearfix ${expanded ? 'expanded' : '' }`}>
          <textarea className="right"
                    value={answerTyped}
                    placeholder="Συμπληρώστε την απάντησή σας"
                    onChange={this.onAnswerChanged}
          />
          <button disabled={isDisabled}
                  id="add-answer-btn"
                  className="right"
                  onClick={this.addAnswer}
          >
            Αποστολή
          </button>
        </div>
      </div>
    )
  }
}

export default TicketThread;
