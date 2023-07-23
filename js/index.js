var arrIdInput = [
    'tknv', 'name', 'email', 'password', 'datepicker', 'luongCB', 'chucvu', 'gioLam'
];

var arrNotiInput = [
    'tbTKNV', 'tbTen', 'tbEmail', 'tbMatKhau', 'tbNgay', 'tbLuongCB', 'tbChucVu', 'tbGiolam'
];

var arrNhanVien = [];



// thêm nhân viên
function themNhanVien() {
    
    

    // tạo ra 1 đối tượng nhanVien từ lớp đối tượng NhanVien 
    var nhanVien = new NhanVien();
    
    // dùng vòng lặp chạy lấy dữ liệu
    for (var i = 0; i < arrIdInput.length; i++) {
        var value = document.getElementById(arrIdInput[i]).value;

        // if (value == '') {
        //     alert('Vui lòng nhập dữ liệu');
        //     console.log(arrIdInput[i]);
        // }

        nhanVien[arrIdInput[i]] = value;
    }
    console.log(nhanVien);

    // dùng valid để check xem có nên thêm nhanVien vào mảng hay không
    var valid = true;
    valid = valid && kiemTraDuLieuRong(arrIdInput, arrNotiInput, nhanVien) && kiemTraEmail(nhanVien['email'], 'tbEmail');

    console.log(valid);

    

    
    


    // nếu valid == false tức là có input còn trống nên sẽ không cho thêm dữ liệu vào mảng, nếu valid == true thì cho dữ liệu thêm vào mảng và hiển thị lên giao diện
    if (valid) {
        arrNhanVien.push(nhanVien);
        luuDuLieuLocal();
        renderGiaoDien();
        // clear dữ liệu đã nhập sau khi bấm thêm nhân viên
        document.getElementById('formNhanVien').reset();
    } 

    /*
    arrNhanVien.push(nhanVien);
    luuDuLieuLocal();
    renderGiaoDien();
    

    // clear dữ liệu đã nhập sau khi bấm thêm nhân viên
    document.getElementById('formNhanVien').reset();
    */
};


// xoá nhân viên
function xoaNhanVien(tkNV) {
    console.log(tkNV);
    var index = -1;
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (arrNhanVien[i].tknv == tkNV) {
            index = i;
        }
    }
    arrNhanVien.splice(index, 1);
    luuDuLieuLocal();
    console.log(arrNhanVien);
    renderGiaoDien();
};

// renderGiaoDien
function renderGiaoDien() {
    var content = '';
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nhanVien = arrNhanVien[i];

        content += `
        <tr>
            <td>${nhanVien.tknv}</td>
            <td>${nhanVien.name}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.datepicker}</td>
            <td>${nhanVien.chucvu}</td>
            <td>${nhanVien.tinhTongLuong}</td>
            <td>${nhanVien.xepLoaiNV}</td>
            <td>
            <button class="btn btn-danger p-1 mb-1" onclick="xoaNhanVien('${nhanVien.tknv}')">Xoá</button>
            <button class="btn btn-warning p-1 mb-1" onclick="layThongTinNhanVien('${nhanVien.tknv}')" data-target="#myModal" data-toggle="modal">Sửa</button>
            </td>
        </tr>
        `;
    }
    // dom tới tableDanhSach để thêm danh sách vào
    document.getElementById('tableDanhSach').innerHTML = content;
};

// luuDuLieuLocal
function luuDuLieuLocal() {
    // chuyển mảng thành dạng dữ liệu JSON.stringify
    var newArr = JSON.stringify(arrNhanVien);
    localStorage.setItem('arrNhanVien', newArr);
};

// layDuLieuLocal
function layDuLieuLocal() {
    var arr = localStorage.getItem('arrNhanVien');
    if (arr != null) {
        var newArr = JSON.parse(arr);
        arrNhanVien = newArr;
        renderGiaoDien();
    }
};
layDuLieuLocal();

// layThongTinNhanVien
function layThongTinNhanVien(tkNV) {
    var nhanVien = {};
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (arrNhanVien[i].tknv == tkNV) {
            nhanVien = arrNhanVien[i];
        }
    }

    for (var z = 0; z < arrIdInput.length; z++) {
        document.getElementById(arrIdInput[z]).value = nhanVien[arrIdInput[z]];
    }

    // readonly cho input tknv
    document.getElementById('tknv').readOnly = true;
    document.getElementById('btnCapNhat').style.display = 'inline-block';
    document.getElementById('btnThemNV').style.display = 'none';
};

// capNhatNhanVien
function capNhatNhanVien() {
    // lấy dữ liệu về
    var nhanVien = new NhanVien;
    for (var i = 0; i < arrIdInput.length; i++) {
        var value = document.getElementById(arrIdInput[i]).value;
        nhanVien[arrIdInput[i]] = value;
    }
    console.log(nhanVien);

    // dùng valid để check xem có nên thêm nhanVien vào mảng hay không
    var valid = true;
    valid = valid && kiemTraDuLieuRong(arrIdInput, arrNotiInput, nhanVien) && kiemTraEmail(nhanVien['email'], 'tbEmail');

    console.log(valid);
    // nếu valid == false tức là có input còn trống nên sẽ không cho thêm dữ liệu vào mảng, nếu valid == true thì cho dữ liệu thêm vào mảng và hiển thị lên giao diện
    if (valid) {
        // tìm kiếm tới vị trí của dữ liệu nhân viên cũ đang đứng
        for (var z = 0; z < arrNhanVien.length; z++) {
            if (nhanVien.tknv == arrNhanVien[z].tknv) {
                arrNhanVien[z] = nhanVien;
                // mở lại input tknv 
                document.getElementById('tknv').readOnly = false;
                // clear hết input sau khi cập nhật
                document.getElementById('formNhanVien').reset();
                // gọi render để cập nhật lại dữ liệu mới nhất lên giao diện
                luuDuLieuLocal();
                renderGiaoDien();
                // sau khi cập nhật xong display-none cho nút cập nhật
                document.getElementById('btnCapNhat').style.display = 'none';
                document.getElementById('btnThemNV').style.display = 'inline-block';
            }
        }
    }




    
};
document.getElementById('btnCapNhat').onclick = capNhatNhanVien;