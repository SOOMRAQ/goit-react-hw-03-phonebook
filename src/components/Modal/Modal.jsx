import { Component } from 'react';
import { createPortal } from 'react-dom';
import { StyledModalBackdrop, StyledModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ code }) => {
    code === 'Escape' && this.props.onClose();
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    currentTarget === target && this.props.onClose();
  };

  render() {
    return createPortal(
      <StyledModalBackdrop onClick={this.handleBackdropClick}>
        <StyledModalContent>{this.props.children}</StyledModalContent>
      </StyledModalBackdrop>,
      modalRoot
    );
  }
}
