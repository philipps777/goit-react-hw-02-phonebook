import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleAddContact = newContact => {
    const contactWithId = { ...newContact, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactWithId],
    }));
  };

  setFilter = filterValue => {
    this.setState({ filter: filterValue });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { name, number, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAdd={this.handleAddContact}
          contacts={this.state.contacts}
          name={name}
          number={number}
          onNameChange={newName => this.setState({ name: newName })}
          onNumberChange={newNumber => this.setState({ number: newNumber })}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.setFilter} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}
