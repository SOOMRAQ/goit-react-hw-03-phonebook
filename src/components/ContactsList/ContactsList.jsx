import { StyledList, StyledItem, StyledButton } from './ContactsList.styled';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledItem key={id}>
            <p>{`${name} ${number}`}</p>
            <StyledButton type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </StyledButton>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
