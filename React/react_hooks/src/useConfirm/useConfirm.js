const useConfirm = (message = "", onConfirm, onCancel) => {
  //onConfirm 존재하지 않거나 function이 아닐때 확인
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onConfirm !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

export default useConfirm;
