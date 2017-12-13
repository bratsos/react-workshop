import React from 'react';

const showTicketNumber = (type) => type === 'question'? ' #1' : '';

const TicketItem = (props) => {
  return (
    <div className="ticket-wrapper">
      <div className="ticket-number">
        {showTicketNumber(props.type)}
      </div>
      <div className={`ticket-item ${props.type} ${props.isLast ? 'last' : ''}`}>
        <small className="ticket-item-date">
          <div className={props.type === 'question' ? 'hidden' : ''}><b>απάντηση skroutz</b></div>
          {props.date}
        </small>
        <div className="ticket-item-main">
          <div className="ticket-item-title">
            {props.type === 'question' ? 'Γενική ερώτηση' : 'Απάντηση'}
          </div>
          <div className="ticket-item-text">
            {
              props.text
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketItem;
