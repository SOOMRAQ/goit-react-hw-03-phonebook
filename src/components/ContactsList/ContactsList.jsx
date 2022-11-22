import { StyledList, StyledItem } from './ContactsList.styled';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledItem key={id}>
            <div>
              <p>{name}</p>
              <p>{number}</p>
            </div>
            <IconButton type="button" onClick={() => onDeleteContact(id)}>
              <DeleteIcon width="13" height="13" fill="#fff" />
            </IconButton>
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
