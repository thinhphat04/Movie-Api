import { createRoot } from 'react-dom/client'; // Đảm bảo đã import từ react-dom/client

import React from 'react'; // Import React

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Sửa lỗi chính tả trong import của Bootstrap CSS

const root = document.getElementById('root'); // Lấy phần tử gốc trong DOM

createRoot(root).render( // Sử dụng createRoot để render
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
