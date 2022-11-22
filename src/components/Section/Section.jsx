import PropTypes from 'prop-types';
import { Section, Title } from './Section.styled';

const PhonebookSection = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

export default PhonebookSection;

PhonebookSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
