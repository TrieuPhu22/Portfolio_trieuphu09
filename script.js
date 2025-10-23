// Script chính cho portfolio website
// Xử lý sự kiện cho menu trên thiết bị di động

// Lấy tham chiếu đến các phần tử DOM
let menuIcon = document.querySelector("#menu-icon");   // Icon menu hamburger
let navbar = document.querySelector(".navbar");        // Thanh điều hướng

// Xử lý sự kiện click vào icon menu
menuIcon.onclick = () => {
  // Chuyển đổi icon từ hamburger sang X và ngược lại
  menuIcon.classList.toggle("bx-x");
  
  // Hiển thị/ẩn thanh điều hướng khi click vào icon
  navbar.classList.toggle("active");
};
