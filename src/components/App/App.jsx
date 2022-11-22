import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { StyledContainer } from './App.styled';
import { Notify } from 'notiflix';

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

  formSubmitHandler = data => {
    const { name } = data;

    const { contacts } = this.state;
    const isDuplicated = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicated) {
      return Notify.failure(`${data.name} is already in contacts`);
    }

    data.id = nanoid();
    this.setState(({ contacts }) => {
      return { contacts: [data, ...contacts] };
    });
  };

  filterChangeHandler = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  filterResultsHandler = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <StyledContainer>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Filter
            value={this.state.filter}
            onChange={this.filterChangeHandler}
          />
          <ContactsList
            contacts={this.filterResultsHandler()}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>
      </StyledContainer>
    );
  }
}

export default App;
