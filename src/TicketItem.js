import React from 'react';

const showTicketNumber = (type) => type === 'question'? ' #1' : '';

const TicketItem = (props) => {
  let defaultText = 'HP Laptop 250 G6, i3-6006U/15.6 FHD/8GB/256GB SSD/Webcam/Win10, Black (2SY45ES)\nΑυτοί οι 2 κωδικοί είναι ολοκαίνουρια μοντέλα και με πολύ ανταγωνιστηκές τιμές για την αγορά. Μήπως πρέπει να επανεξετάσετε την περίπτωση τοποθέτησής τους έστω και σε περίπτωση που ζητηθούν και από άλλα καταστήματα ,καθώς είναι προιόντα που θα επιδράσουν θετικά στην εικόνα της αγοράς από τους καταναλωτές και θα έχουν μεγάλη απήχηση? Σας ευχαριστούμε εκ των προτέρων.';

  return (
    <div className="ticket-wrapper">
      <div className="ticket-number">
        {showTicketNumber(props.type)}
      </div>
      <div className={`ticket-item ${props.type} ${props.name}`}>
        <small className="ticket-item-date">
          <div className={props.type === 'question' ? 'hidden' : ''}><b>απάντηση skroutz</b></div>
          {props.date}
        </small>
        <div className="ticket-item-main">
          <div className="ticket-item-title">
            {props.type === 'question' ? 'Γενική ερώτηση' : 'Απάντηση'}
          </div>
          <div className="ticket-item-text">
            {props.text || defaultText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketItem;