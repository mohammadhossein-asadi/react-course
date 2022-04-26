function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <buttun className="btn btn--alt" onClick={cancelHandler}>
        Cancle
      </buttun>
      <buttun className="btn" onClick={confirmHandler}>
        Confirm
      </buttun>
    </div>
  );
}

export default Modal;
