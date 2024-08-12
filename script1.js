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

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            document.getElementById('error-message').innerText = error.message;
        });
});
