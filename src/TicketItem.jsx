import React from 'react';
import PropTypes from 'prop-types';

const showTicketNumber = (type) => type === 'question'? ' #1' : '';

const TicketItem = ({ type, text, date, isLast }) => {
  return (
    <div className="ticket-wrapper">
      <div className="ticket-number">
        {showTicketNumber(type)}
      </div>
      <div className={`ticket-item ${type} ${isLast ? 'last' : ''}`}>
        <small className="ticket-item-date">
          <div className={type === 'question' ? 'hidden' : ''}><b>απάντηση skroutz</b></div>
          {date}
        </small>
        <div className="ticket-item-main">
          <div className="ticket-item-title">
            {type === 'question' ? 'Γενική ερώτηση' : 'Απάντηση'}
          </div>
          <div className="ticket-item-text">
            {text}
          </div>
        </div>
      </div>
    </div>
  )
};

TicketItem.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  isLast: PropTypes.bool
};

TicketItem.defaultProps = {
  type: 'question',
  text: '',
  date: '01/01/2018 12:00',
  isLast: false
};

export default TicketItem;
