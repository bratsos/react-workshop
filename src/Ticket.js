import React from 'react';
import TicketItem from './TicketItem';
import {getDateNow} from './modules/common';

class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      answerTyped: '',
      arrayOfTickets: props.arrayOfTickets,
      isDisabled: true
    }
  }

  addanswer = e => {
    e.preventDefault();

    let answerTyped = this.state.answerTyped.trim();
    let ticketData = {
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

  expandForm = e => {
    this.setState((prevState) => {
      return {
        expanded: !prevState.expanded
      }
    });
  }

  onAnswerChanged = (e) => {
    let btnDisabled = false;

    if (e.target.value.trim().length === 0) {
      btnDisabled = true;
    }

    this.setState({
        answerTyped: e.target.value,
        isDisabled: btnDisabled
    });
  }

  render() {
    let ticketComponents = this.state.arrayOfTickets.map((ticket, index) => {
      return <TicketItem
                key={index}
                type={ticket.type}
                text={ticket.text}
                date={ticket.date}
                name={index === this.state.arrayOfTickets.length - 1 && 'last'}
              />
    });

    return [
      <div key="ticket" className="ticket">
       {// <TicketItem type="question"/>
        //<TicketItem type="answer"/>
      }
        {ticketComponents}
        <div className="answer-button" onClick={(e) => this.expandForm(e)}>
          <a className={`form-expand-button ${this.state.expanded ? 'clicked' : ''}`}>
            <span className="expand-collapse">{this.state.expanded ? '-' : '+'}</span>
            Απάντηση
          </a>
        </div>
      </div>,
      <div key="answer-form" className={`answer-wrapper clearfix ${this.state.expanded ? 'expanded' : '' }`}>
        <textarea className="right" value={this.state.answerTyped} placeholder="Συμπληρώστε την απάντησή σας" onChange={(e) => this.onAnswerChanged(e)}></textarea>
        <button disabled={this.state.isDisabled} id="add-answer-btn" className="right" onClick={this.addanswer}>Αποστολή</button>
      </div>
    ]
  }
}

export default Ticket;