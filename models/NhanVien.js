function NhanVien () {
    // thuộc tính
    this.tknv = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.datepicker = '';
    this.luongCB = 0;
    this.chucvu = '';
    this.gioLam = 0;

    // phương thức
    this.tinhTongLuong = tong_luong();
    this.xepLoaiNV = xep_loai();
}

function tong_luong() {
    var tongLuong = 0;
    var chucvu = document.getElementById('chucvu').value;
    var luongCB = document.getElementById('luongCB').value *1;
    if (chucvu === 'Sếp') {
        tongLuong = luongCB*3;
    } else if (chucvu === 'Trưởng phòng') {
        tongLuong = luongCB*2;
    } else if (chucvu === 'Nhân viên') {
        tongLuong = luongCB*1;
    } else {
        tongLuong = 0;
    };

    return tongLuong;
}

function xep_loai() {
    var xepLoai = '';
    var gioLam = document.getElementById('gioLam').value *1;
    if (gioLam < 160) {
        xepLoai = 'Trung bình';
    } else if (gioLam >= 160 && gioLam < 176) {
        xepLoai = 'Khá';
    } else if (gioLam >= 176 && gioLam < 192) {
        xepLoai = 'Giỏi';
    } else {
        xepLoai = 'Xuất sắc';
    };
    return xepLoai;
}