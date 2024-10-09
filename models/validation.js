class Validation {
  checkEmty(value, divAcc, message) {
    if (value === "") {
      document.getElementById(divAcc).innerHTML = message;
      document.getElementById(divAcc).style.display = "block";
      return false;
    }
    document.getElementById(divAcc).innerHTML = "";
    document.getElementById(divAcc).style.display = "none";
    return true;
  }
  checkCharacterString(value, divAcc, message) {
    const letter = "^[a-z0-9_-]{4,6}$";
    if (value.match(letter)) {
      document.getElementById(divAcc).innerHTML = "";
      document.getElementById(divAcc).style.display = "none";
      return true;
    }
    document.getElementById(divAcc).innerHTML = message;
    document.getElementById(divAcc).style.display = "block";
    return false;
  }
  checkHoVaTen(value, divAcc, message) {
    const letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      document.getElementById(divAcc).innerHTML = "";
      document.getElementById(divAcc).style.display = "none";
      return true;
    }
    document.getElementById(divAcc).innerHTML = message;
    document.getElementById(divAcc).style.display = "block";
    return false;
  }
  checkEmail(value, divAcc, message) {
    const letter = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
    if (value.match(letter)) {
      document.getElementById(divAcc).innerHTML = "";
      document.getElementById(divAcc).style.display = "none";
      return true;
    }
    document.getElementById(divAcc).innerHTML = message;
    document.getElementById(divAcc).style.display = "block";
    return false;
  }
  checkPass(value, divAcc, message) {
    const letter = "^[a-zA-Z0-9]{6,12}$";
    if (value.match(letter)) {
      document.getElementById(divAcc).innerHTML = "";
      document.getElementById(divAcc).style.display = "none";
      return true;
    }
    document.getElementById(divAcc).innerHTML = message;
    document.getElementById(divAcc).style.display = "block";
    return false;
  }
  checkLuong(value, divAcc, message) {
    const letter = "^d+$";
    if (value.match(letter)) {
      document.getElementById(divAcc).innerHTML = "";
      document.getElementById(divAcc).style.display = "none";
      return true;
    }
    document.getElementById(divAcc).innerHTML = message;
    document.getElementById(divAcc).style.display = "block";
    return false;
  }
}
export default Validation;
