import React from 'react';
import Ticket from './Ticket';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.arrayOfTickets = [{
      type: 'question',
      date: '19/11/2017 12:54',
      text: 'Παρακαλώ ενημερώστε με για την πορεία του ticket. Ευχαριστώ.'
    }];
  }

  render() {

    return (
      <div className="tickets-container card">
        <Ticket arrayOfTickets={this.arrayOfTickets} />
      </div>
    );
  }
}

export default MainLayout;