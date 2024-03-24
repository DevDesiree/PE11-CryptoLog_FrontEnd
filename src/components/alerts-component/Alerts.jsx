import React from "react";
import Swal from "sweetalert2";

const Alerts = () => {
  const showAlert = (options) => {
    return Swal.fire(options);
  };

  const showSuccessAlert = (title, message, timer = 1500) => {
    return showAlert({
      icon: "success",
      title: title,
      text: message,
      timer: timer,
      showConfirmButton: false
    });
  };

  const showSuccessAlertTop = (title, message, timer = 1500) => {
    return showAlert({
      icon: "success",
      title: title,
      text: message,
      timer: timer,
      showConfirmButton: false,
      position: "top-end",
    });
  };

  const showConfirmationAlert = (title, text, confirmButtonText) => {
    return showAlert({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmButtonText,
    }).then((result) => {
      return result.isConfirmed;
    });
  };

  const showLoadingAlert = (title, text, timer = 2000) => {
    return showAlert({
      title: title,
      html: text,
      timer: timer,
      timerProgressBar: true,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  };

  const showErrorAlert = (title, text ) => {
    return showAlert({
        title: title,
        text: text,
        icon: "error"
    });
  };


  return {
    showAlert,
    showSuccessAlert,
    showSuccessAlertTop,
    showConfirmationAlert,
    showLoadingAlert,
    showErrorAlert
  };
};

export default Alerts;
