function kiemTraDuLieuRong(arrIdInput, arrNotiInput, nhanVien) {
    var valid = true;
    for (var z = 0; z < arrIdInput.length; z++) {
        // check xem có dữ liệu trong thuộc tính hay không
        if (nhanVien[arrIdInput[z]] == '') {
            valid = valid && false;
            document.getElementById(arrNotiInput[z]).style.display = 'inline-block';
            document.getElementById(arrNotiInput[z]).innerHTML = 'Vui lòng nhập dữ liệu';
        } else {
            document.getElementById(arrNotiInput[z]).style.display = 'none';
            document.getElementById(arrNotiInput[z]).innerHTML = '';
            valid = valid && true;
        }
    }
    return valid;
}

function kiemTraEmail(valueEmail, notiInput) {
    var valid = true;
    // biến lưu chuỗi regex
    var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (valueEmail !== '') {
        if (!regexEmail.test(valueEmail)) {
            document.getElementById(notiInput).style.display = 'inline-block';
            document.getElementById(notiInput).innerHTML = 'Định dạng email không đúng';
            valid = valid && false;
        } else {
            // gán giá trị vào cho biến valid + cho ô thông báo input email giá trị chuỗi rỗng
            document.getElementById(notiInput).innerHTML = '';
            document.getElementById(notiInput).style.display = 'none';
            valid = valid && true;
        }
    }
    return valid;
}

function kiemTraTaiKhoan(valueTaiKhoan, notiTaiKhoan) {
    var valid = true;
    if (valueTaiKhoan.length < 4 || valueTaiKhoan.length > 6) {
        document.getElementById(notiTaiKhoan).style.display = 'inline-block';
        document.getElementById(notiTaiKhoan).innerHTML = 'Tài khoản tối đa 4 - 6 ký tự';
        valid = valid && false;
    } else {
        document.getElementById(notiTaiKhoan).style.display = 'none';
        document.getElementById(notiTaiKhoan).innerHTML = '';
        valid = valid && true;
    }
    return valid;
}

function kiemTraTen(valueTen, notiTen) {
    var regexTen = /^[a-zA-Z ]+$/;
    var validName = regexTen.test(removeAscent(valueTen));
    var valid = true;
    if (validName) {
        document.getElementById(notiTen).style.display = 'none';
        document.getElementById(notiTen).innerHTML = '';
        valid = valid && true;
    } else {
        document.getElementById(notiTen).style.display = 'inline-block';
        document.getElementById(notiTen).innerHTML = 'Tên không đúng định dạng';
        valid = valid && false;
    }
    return valid;
}

function kiemTraPassword(valuePassword, notiPassword) {
    var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    var validPassword = regexPassword.test(valuePassword);
    var valid = true;
    if (validPassword) {
        document.getElementById(notiPassword).style.display = 'none';
        document.getElementById(notiPassword).innerHTML = '';
        valid = valid && true;
    } else {
        document.getElementById(notiPassword).style.display = 'inline-block';
        document.getElementById(notiPassword).innerHTML = 'Password phải có 6 - 10 ký tự (bao gồm ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt';
        valid = valid && false;
    }
    return valid;
}

function kiemTraNgayThang(valueNgayThang, notiNgayThang) {
    var selectedDate = valueNgayThang;
    var valid = true;
    
    var regExp = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dateArray = selectedDate.match(regExp);

    if (dateArray == null){
        valid = valid && false;
        document.getElementById(notiNgayThang).style.display = 'inline-block';
        document.getElementById(notiNgayThang).innerHTML = 'Vui lòng nhập dữ liệu ngày làm - mm/dd/yyyy';
    }

    month = dateArray[1];
    day= dateArray[3];
    year = dateArray[5];        

    if (month < 1 || month > 12){
        valid = valid && false;
        document.getElementById(notiNgayThang).style.display = 'inline-block';
        document.getElementById(notiNgayThang).innerHTML = 'Định dạng tháng không hợp lệ';
    }else if (day < 1 || day> 31){ 
        valid = valid && false;
        document.getElementById(notiNgayThang).style.display = 'inline-block';
        document.getElementById(notiNgayThang).innerHTML = 'Định dạng ngày không hợp lệ';
    }else if ((month==4 || month==6 || month==9 || month==11) && day ==31){
        valid = valid && false;
        document.getElementById(notiNgayThang).style.display = 'inline-block';
        document.getElementById(notiNgayThang).innerHTML = 'Định dạng ngày không hợp lệ';
    }else if (month == 2){
        var isLeapYear = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day> 29 || (day ==29 && !isLeapYear)){
            valid = valid && false;
            document.getElementById(notiNgayThang).style.display = 'inline-block';
            document.getElementById(notiNgayThang).innerHTML = 'Định dạng ngày không hợp lệ';
        }
    } else {
        valid = valid && true;
        document.getElementById(notiNgayThang).style.display = 'none';
        document.getElementById(notiNgayThang).innerHTML = '';
    }
    return valid;
}

function kiemTraLuongCB(valueLuongCB, notiLuongCB) {
    var valid = true;
    var luongCB = valueLuongCB *1;
    if (luongCB < 1e+6) {
        valid = valid && false;
        document.getElementById(notiLuongCB).style.display = 'inline-block';
        document.getElementById(notiLuongCB).innerHTML = 'Số lương cơ bản không đúng';
    } else if (luongCB > 20e+6) {
        valid = valid && false;
        document.getElementById(notiLuongCB).style.display = 'inline-block';
        document.getElementById(notiLuongCB).innerHTML = 'Số lương cơ bản không đúng';
    } else {
        valid = valid && true;
        document.getElementById(notiLuongCB).style.display = 'none';
        document.getElementById(notiLuongCB).innerHTML = '';
    };

    return valid;
}

function kiemTraChucVu(valueChucVu, notiChucVu) {
    var valid = true;
    if (valueChucVu.length == 0) {
        valid = valid && false;
        document.getElementById(notiChucVu).style.display = 'inline-block';
        document.getElementById(notiChucVu).innerHTML = 'Vui lòng chọn chức vụ';
    } else {
        valid = valid && true;
        document.getElementById(notiChucVu).style.display = 'none';
        document.getElementById(notiChucVu).innerHTML = '';
    }
    return valid;
}

function kiemTraGioLam(valueGioLam, notiGioLam) {
    var valid = true;
    var gioLamm = valueGioLam *1;
    if (gioLamm < 80) {
        valid = valid && false;
        document.getElementById(notiGioLam).style.display = 'inline-block';
        document.getElementById(notiGioLam).innerHTML = 'Số giờ làm không đúng';
    } else if (gioLamm > 200) {
        valid = valid && false;
        document.getElementById(notiGioLam).style.display = 'inline-block';
        document.getElementById(notiGioLam).innerHTML = 'Số giờ làm không đúng';
    } else {
        valid = valid && true;
        document.getElementById(notiGioLam).style.display = 'none';
        document.getElementById(notiGioLam).innerHTML = '';
    };
    return valid;
}