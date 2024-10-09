import manageNhanVien from "./manageNhanVien.js";
import staff from "./nhanVien.js";
import Validation from "./validation.js";

const validation = new Validation();
const addNhanVien = new manageNhanVien();
const getElId = (id) => document.getElementById(id);

const renderNhanVien = (listNhanVien) => {
  let contentHTML = "";
  listNhanVien.forEach((nhanVien) => {
    contentHTML += `
          <tr>
              <td>${nhanVien.id}</td>
              <td>${nhanVien.account}</td>
              <td>${nhanVien.name}</td>
              <td>${nhanVien.email}</td>
              <td>${nhanVien.time}</td>
              <td>${nhanVien.position}</td>
              <td>${nhanVien.wage}</td>
              <td>${nhanVien.xepLoai}</td>
              <td>
              <button class="btn btn-danger" onclick="deleteStaff('${nhanVien.id}')">Xoá</button>
              <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editStaff  ('${nhanVien.id}')">Cập nhật</button>
              </td>
          </tr>
          `;
  });
  getElId("tableDanhSach").innerHTML = contentHTML;
};

// Xoá thông tin
const deleteStaff = (id) => {
  console.log(id);
  addNhanVien._deleteStaff(id);
  // render lại danh sách
  renderNhanVien(addNhanVien.listNhanVien);
  setLocalStorage();
};
window.deleteStaff = deleteStaff;

// Lưu data nhân viên
const setLocalStorage = () => {
  const dataString = JSON.stringify(addNhanVien.listNhanVien);
  localStorage.setItem("LIST_STAFF", dataString);
};
// đẩy data lên
const getLocalStorage = () => {
  const dataString = localStorage.getItem("LIST_STAFF");
  if (dataString) {
    // đổi lại từ string về danh sách
    const dataJson = JSON.parse(dataString);
    // nạp lại danh sách vô lại manageNhanVien
    addNhanVien.listNhanVien = dataJson;
    renderNhanVien(addNhanVien.listNhanVien);
  }
};
// Gọi data ra thành global
getLocalStorage();

getElId("btnThem").onclick = () => {
  getElId("header-title").innerHTML = "Thêm nhân viên";
  // Ẩn cập nhật
  getElId("btnCapNhat").style.display = "none";
  // Hiện thêm nhân viên
  getElId("btnThemNV").style.display = "block";
  // reset from
  getElId("staffFrom").reset();
};

// Cập nhập nhân viên
const editStaff = (id) => {
  getElId("header-title").innerHTML = "Cập nhật";

  // Ẩn cập nhật
  getElId("btnThemNV").style.display = "none";
  // Hiện thêm nhân viên
  getElId("btnCapNhat").style.display = "block";

  const nhanVien = addNhanVien.getStaffById(id);
  if (nhanVien) {
    getElId("tknv").value = nhanVien.account;
    getElId("name").value = nhanVien.name;
    getElId("email").value = nhanVien.email;
    getElId("password").value = nhanVien.password;
    getElId("datepicker").value = nhanVien.date;
    getElId("luongCB").value = nhanVien.wage;
    getElId("chucvu").value = nhanVien.position;
    getElId("gioLam").value = nhanVien.time;
  }
};
window.editStaff = editStaff;

getElId("btnThemNV").onclick = () => {
  const account = getElId("tknv").value;
  const name = getElId("name").value;
  const email = getElId("email").value;
  const password = getElId("password").value;
  const date = getElId("datepicker").value;
  const wage = getElId("luongCB").value;
  const position = getElId("chucvu").value;
  const time = getElId("gioLam").value;
  let id = addNhanVien.listNhanVien.length + 1;
  let xepLoai = addNhanVien.listNhanVien.length;

  let isValid = true;
  let wageTong = 0;

  isValid &=
    validation.checkEmty(account, "tbTKNV", "Vui lòng nhập thông tin") &&
    validation.checkCharacterString(
      account,
      "tbTKNV",
      "Tài khoản tối đa 4 - 6 ký số, không để trống"
    );
  isValid &=
    validation.checkEmty(name, "tbTen", "Vui lòng nhập thông tin") &&
    validation.checkHoVaTen(
      name,
      "tbTen",
      "Tên nhân viên phải là chữ, không để trống"
    );
  isValid &=
    validation.checkEmty(email, "tbEmail", "Vui lòng nhập thông tin") &&
    validation.checkEmail(
      email,
      "tbEmail",
      "Email phải đúng định dạng, không để trống"
    );
  isValid &=
    validation.checkEmty(password, "tbMatKhau", "Vui lòng nhập mật khẩu") &&
    validation.checkPass(
      password,
      "tbMatKhau",
      "Mật khẩu từ 6-10 ký tự, không để trống"
    );
  isValid &= validation.checkEmty(time, "tbGiolam", "Vui lòng nhập giờ làm");
  isValid &= validation.checkEmty(wage, "tbLuongCB", "Vui lòng nhập lương");

  //   Tính lương
  if (position == "Sếp") {
    wageTong = wage * 3;
  } else if (position == "Trưởng phòng") {
    wageTong = wage * 2;
  } else {
    wageTong = wage * 1;
  }

  // Xếp loại
  if (time >= 192) {
    console.log("Nhân viên xuất sắc");
  } else if (time >= 176) {
  } else if (time >= 160) {
  } else {
  }

  if (account) {
    const themNhanVien = new staff(
      id,
      account,
      name,
      email,
      password,
      date,
      wageTong,
      position,
      time,
      xepLoai
    );
    addNhanVien.addStaff(themNhanVien);
    renderNhanVien(addNhanVien.listNhanVien);
    setLocalStorage();
    return null;
  }
};

getElId("btnCapNhat").onclick = () => {
  const account = getElId("tknv").value;
  const name = getElId("name").value;
  const email = getElId("email").value;
  const password = getElId("password").value;
  const date = getElId("datepicker").value;
  const wage = getElId("luongCB").value;
  const position = getElId("chucvu").value;
  const time = getElId("gioLam").value;
  let id = addNhanVien.listNhanVien.length + 1;

  let wageTong = 0;
  let timeWork = 0;

  //   Tính lương
  if (position == "Sếp") {
    wageTong = wage * 3;
  } else if (position == "Trưởng phòng") {
    wageTong = wage * 2;
  } else {
    wageTong = wage * 1;
  }

  const themNhanVien = new staff(
    id,
    account,
    name,
    email,
    password,
    date,
    wageTong,
    position,
    time
  );
  addNhanVien.updateStaff(themNhanVien);
  renderNhanVien(addNhanVien.listNhanVien);
  setLocalStorage();
};
