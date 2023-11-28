import axios from "axios";
/*Mã này được sử dụng để tạo một instance của axios với cấu hình cụ thể. 
Instance này được cấu hình để gửi các yêu cầu HTTP đến một địa chỉ cơ sở cụ thể 
và bao gồm 
một tiêu đề đặc biệt để bỏ qua cảnh báo trình duyệt.*/
export default axios.create(
    {
  baseURL:`https://54e3-14-161-15-207.ngrok-free.app`,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },



});

