import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import PhonebookSection from 'components/Section/Section';
import { StyledContainer } from './App.styled';
import { Notify } from 'notiflix';
import Modal from 'components/Modal/Modal';
import IconButton from 'components/IconButton';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { ReactComponent as AddIcon } from '../../icons/add.svg';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { filter, showModal } = this.state;
    return (
      <>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <IconButton
              onClick={this.toggleModal}
              aria-label="Close Modal"
              style={{ backgroundColor: 'transparent', alignSelf: 'flex-end' }}
            >
              <CloseIcon width="20" height="20" />
            </IconButton>
            <Form onSubmit={this.formSubmitHandler} />
          </Modal>
        )}
        <StyledContainer>
          <PhonebookSection title="Phonebook">
            <IconButton
              onClick={this.toggleModal}
              aria-label="Open Modal"
              style={{ backgroundColor: 'green' }}
            >
              <AddIcon width="20" height="20" fill="#fff" />
            </IconButton>
          </PhonebookSection>
          <PhonebookSection title="Contacts">
            <Filter value={filter} onChange={this.filterChangeHandler} />
            <ContactsList
              contacts={this.filterResultsHandler()}
              onDeleteContact={this.onDeleteContact}
            />
          </PhonebookSection>
        </StyledContainer>
      </>
    );
  }
}

export default App;
