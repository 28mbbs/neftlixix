<!-- Firebase App (core) -->
<script type="module">
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
  import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js';

  // Конфигурация Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBuzECi89x-t7kQFrgCGS8DKENi1x0QUYk",
    authDomain: "projectwith-50713.firebaseapp.com",
    databaseURL: "https://projectwith-50713-default-rtdb.firebaseio.com",
    projectId: "projectwith-50713",
    storageBucket: "projectwith-50713.appspot.com",
    messagingSenderId: "934696656108",
    appId: "1:934696656108:web:7ec8605759ac1c6a6559c9",
    measurementId: "G-DFZK62DXHB"
  };

  // Инициализация Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

// Обработка отправки формы
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Получение данных из формы
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка на пустые значения
    if (!username || !email || !password) {
        message.textContent = 'Пожалуйста, заполните все поля!';
        return;
    }

    // Запись данных в Realtime Database
    database.ref('users/').push({
        username: username,
        email: email,
        password: password // В реальном приложении пароль не должен храниться в базе данных в открытом виде!
    }).then(() => {
        message.textContent = 'Регистрация прошла успешно!';
        form.reset();
    }).catch((error) => {
        message.textContent = 'Произошла ошибка: ' + error.message;
    });
});
