import { ContactsForm } from './ContactsForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ev => {
    ev.preventDefault();

    const contact = {
      id: nanoid(),
      name: ev.target.elements.name.value,
      number: ev.targer.elements.number.value,
    };
    if (
      this.state.contacts.some(
        person => person.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert('${contact.name} exist already in contacts');
    }

    this.setState(preventState => ({
      contacts: [...preventState.contacts, contact],
    }));

    ev.target.reset();
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm addContact={this.addContact} />
        <h2>Contacts</h2>
      </>
    );
  }
}
export default App;
