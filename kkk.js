<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>สมัครสมาชิก</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #111111;
            margin: 0;
            padding: 0;
        }

        .header {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 24px;
        }

        .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 30px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .container h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
        }

        input {
            width: 95%;
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }

        

        button {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
        

        button:hover {
            background-color: #45a049;
        }

        .error-message {
            color: red;
            font-size: 14px;
            margin-top: 10px;
            text-align: center;
        }

        .success-message {
            color: green;
            font-size: 14px;
            margin-top: 10px;
            text-align: center;
        }
        
        .back-link {
            display: inline-block;
            width: 90%;
            margin-top: 10px;
            font-size: 14px;
            color: white;
            background: #007bff;
            text-decoration: none;
            padding: 12px 20px;
            border-radius: 8px;
            transition: 0.3s ease-in-out;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
            text-align: center;
            
        }
    </style>
</head>
<body>

    <div class="header">
        ระบบสมัครสมาชิก
    </div>

    <div class="container">
        <h2>สมัครสมาชิก</h2>
        <form id="register-form">
            <div class="form-group">
                <label for="username">ชื่อผู้ใช้:</label>
                <input type="text" id="username" name="username" placeholder="กรุณากรอกชื่อผู้ใช้" required>
            </div>
            <div class="form-group">
                <label for="email">อีเมล:</label>
                <input type="email" id="email" name="email" placeholder="กรุณากรอกอีเมล" required>
            </div>
            <div class="form-group">
                <label for="password">รหัสผ่าน:</label>
                <input type="password" id="password" name="password" placeholder="กรุณากรอกรหัสผ่าน" required>
            </div>
            <div class="form-group">
                <label for="confirm-password">ยืนยันรหัสผ่าน:</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="ยืนยันรหัสผ่าน" required>
            </div>
            
            <p><button type="submit">สมัครสมาชิก</button></p>

            <a href="Login.html" class="back-link"> กลับไปหน้าหลัก</a>
          
        </form>

        <div id="message" class="error-message"></div>
        <div id="success-message" class="success-message"></div>
    </div>
    

    <script>
        document.getElementById('register-form').addEventListener('submit', function(event) {
            event.preventDefault();  // ป้องกันการรีเฟรชหน้าจอเมื่อส่งฟอร์ม

            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirm-password').value.trim();

            let message = '';
            let successMessage = '';

            // ตรวจสอบว่าชื่อผู้ใช้, อีเมล, และรหัสผ่านไม่ว่าง
            if (username === '' || email === '' || password === '' || confirmPassword === '') {
                message = 'กรุณากรอกข้อมูลให้ครบถ้วน';
            } 
            // ตรวจสอบความตรงกันของรหัสผ่าน
            else if (password !== confirmPassword) {
                message = 'รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน';
            } 
            // ตรวจสอบรูปแบบอีเมล
            else if (!validateEmail(email)) {
                message = 'กรุณากรอกอีเมลที่ถูกต้อง';
            } 
            else {
                successMessage = 'สมัครสมาชิกสำเร็จ!';
                // หลังจากสมัครสมาชิกสำเร็จ ให้เคลียร์ข้อมูลในฟอร์ม
                document.getElementById('register-form').reset();
            }

            // แสดงข้อความ
            if (message) {
                document.getElementById('message').textContent = message;
                document.getElementById('success-message').textContent = '';
            } else if (successMessage) {
                document.getElementById('success-message').textContent = successMessage;
                document.getElementById('message').textContent = '';
            }
        });

        // ฟังก์ชันตรวจสอบรูปแบบอีเมล
        function validateEmail(email) {
            const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return re.test(email);
        }
    </script>

</body>
</html>
