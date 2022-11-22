import PropTypes from 'prop-types';
import { StyledInput } from './Filter.styled';

const Filter = ({ onChange, value }) => {
  return (
    <StyledInput
      type="text"
      onChange={onChange}
      value={value}
      placeholder="Filter by name"
    />
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
