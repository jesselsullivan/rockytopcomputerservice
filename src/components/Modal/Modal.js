import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { returnAttributes } from '../utils';
import { Transition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';

class Modal extends Component {
  state = {
    isOpen: this.props.isOpen || false
  };

  modalContent = React.createRef();

  componentDidMount = () => {
    document.body.classList.add('modal-open');
  };

  componentWillUnmount = () => {
    document.body.classList.remove('modal-open');
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.isOpen !== this.props.isOpen) {
      this.setState({ isOpen: this.props.isOpen });
    }
  };

  handleOnEntered = (type, node) => {
    if (type === 'backdrop' && this.props.fade === false) {
      return;
    }

    node.classList.add('show');
    this.props.autoFocus && node.focus();

    if (type === 'modal') {
      this.props.showModal && this.props.showModal();
    }
  };

  handleOnExit = (type, node) => {
    if (type === 'backdrop' && this.props.fade === false) {
      return;
    }

    node.classList.remove('show');

    if (type === 'modal') {
      this.props.hideModal && this.props.hideModal();
    }
  };

  handleOnExited = node => {
    this.props.hiddenModal && this.props.hiddenModal();
  };

  handleBackdropClick = e => {
    if (
      !this.props.backdrop ||
      (e.target.closest('[role="dialog"]') &&
        !e.target.classList.contains('modal'))
    )
      return;

    if (!this.modalContent.contains(e.target)) {
      this.props.toggle();
    }
  };

  handleEscape = e => {
    if (this.props.keyboard && e.keyCode === 27) {
      e.preventDefault();
      this.props.toggle();
    }
  };

  render() {
    const {
      children,
      backdrop,
      backdropClassName,
      contentClassName,
      className,
      size,
      side,
      disableFocusTrap,
      fullHeight,
      frame,
      centered,
      position,
      cascading,
      modalStyle,
      wrapClassName,
      animation,
      fade,
      tabIndex,
      role,
      id,
      inline
    } = this.props;

    const timeout = fade ? 300 : 0;

    const modalDialogClasses = classNames(
      {
        'cascading-modal': cascading,
        'modal-side': side,
        'modal-full-height': fullHeight,
        'modal-frame': frame,
        'modal-dialog-centered': centered,
        [`modal-${size}`]: size,
        [`modal-${position}`]: position,
        [`modal-notify white-text modal-${modalStyle}`]: modalStyle
      },
      'modal-dialog',
      className
    );

    const wrapperClasses = classNames(
      {
        modal: !inline,
        fade: fade,
        top: fade && !animation && !position,
        [`${animation}`]: fade && animation
      },
      fade && position && position.split('-')[1],
      wrapClassName
    );

    const backdropClasses = classNames(
      'modal-backdrop',
      fade ? 'fade' : 'show',
      backdropClassName
    );

    const contentClasses = classNames('modal-content', contentClassName);

    const modalAttributes = returnAttributes({
      style: { display: 'block' },
      id,
      tabIndex,
      role,
      'aria-hidden': 'true'
    });

    const modal = (
      <div
        data-test='modal'
        onKeyUp={this.handleEscape}
        className={wrapperClasses}
        {...modalAttributes}
      >
        <div className={modalDialogClasses} role='document'>
          <div
            ref={elem => (this.modalContent = elem)}
            className={contentClasses}
          >
            {children}
          </div>
        </div>
      </div>
    );

    return (
      <Fragment>
        {backdrop && (
          <Transition
            timeout={timeout}
            in={this.state.isOpen}
            appear={this.state.isOpen}
            mountOnEnter
            unmountOnExit
            onEntered={node => this.handleOnEntered('backdrop', node)}
            onExit={node => this.handleOnExit('backdrop', node)}
            onExited={this.handleOnExited}
          >
            <div className={backdropClasses} />
          </Transition>
        )}
        <Transition
          timeout={timeout}
          in={this.state.isOpen}
          appear={this.state.isOpen}
          mountOnEnter
          unmountOnExit
          onMouseDown={this.handleBackdropClick}
          onEntered={node => this.handleOnEntered('modal', node)}
          onExit={node => this.handleOnExit('modal', node)}
        >
          {!disableFocusTrap ? <FocusTrap>{modal}</FocusTrap> : modal}
        </Transition>
      </Fragment>
    );
  }
}

Modal.defaultProps = {
  autoFocus: true,
  backdrop: true,
  backdropTransitionTimeout: 150,
  fade: true,
  disableFocusTrap: false,
  isOpen: false,
  keyboard: true,
  modalTransitionTimeout: 300,
  role: 'dialog',
  tabIndex: '-1',
  zIndex: 1050
};

Modal.propTypes = {
  animation: PropTypes.string,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  cascading: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  fade: PropTypes.bool,
  disableFocusTrap: PropTypes.bool,
  frame: PropTypes.bool,
  fullHeight: PropTypes.bool,
  hiddenModal: PropTypes.func,
  hideModal: PropTypes.func,
  id: PropTypes.string,
  keyboard: PropTypes.bool,
  modalClassName: PropTypes.string,
  modalStyle: PropTypes.string,
  position: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  side: PropTypes.bool,
  showModal: PropTypes.func,
  tabIndex: PropTypes.string,
  wrapClassName: PropTypes.string
};

export default Modal;
export { Modal as MDBModal };
