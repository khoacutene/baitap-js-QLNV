class manageNhanVien {
    constructor(){
        this.listNhanVien = []
    }
    addStaff(themNhanVien) {
        this.listNhanVien.push(themNhanVien);
    }
    findIndexById(id) {
        const index = this.listNhanVien.findIndex((staff) => {
            return staff.id == id
        })
        return index
    }
    _deleteStaff(id) {
        const index = this.findIndexById(id);
        if (index !== -1) {
            this.listNhanVien.splice(index, 1)
        }
    } 
    getStaffById(id) {
        const index = this.findIndexById(id)
        if (index !== 1) {
            return this.listNhanVien[index]
        }
        return null;
    }
    updateStaff(addNhanVien){
        const index = this.findIndexById(addNhanVien)
        if (index !== -1) {
            this.listNhanVien[index] = addNhanVien
        }
    }
}
export default manageNhanVien