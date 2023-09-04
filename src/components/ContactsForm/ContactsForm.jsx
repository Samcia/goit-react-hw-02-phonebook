import PropTypes from 'prop-types';
import './ContactsForm.css';

export const ContactsForm = ({ addContact }) => {
  return (
    <form onSubmit={addContact} className="form">
      <label>
        Name
        <input
          type="text"
          name="name"
          id=""
          className="form_input"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          className="form_input"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="form_button">Add contact</button>
    </form>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
