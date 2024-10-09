class staff {
    constructor(_id,_account, _name, _email, _password, _date, _wage, _position, _time, _xepLoai){
        this.id = _id
        this.account = _account
        this.name = _name
        this.email = _email
        this.password = _password
        this.date = _date
        this.wage = _wage
        this.position = _position
        this.time = _time
        this.xepLoai = _xepLoai
    }
    calcLuongGiamDoc(){
        this.luongGiamDoc = this.wage * 3
    }
    calcLuongTruongPhong() {
        this.luongTruongPhong = this.wage * 2
    }
    calcLuongNhanVien() {
        this.luongNhanVien = this.wage * 1
    }
}

export default staff;