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