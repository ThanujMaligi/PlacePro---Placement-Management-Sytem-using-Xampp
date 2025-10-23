# PlacePro – Placement Management System

**PlacePro** is a web-based Placement Management System developed using PHP, MySQL, HTML, CSS, and JavaScript on the XAMPP platform.  
It is designed to automate and streamline the campus placement process for colleges and universities.

---

## 📁 Project Structure
PlacePro/
│
├── admin/ # Admin functionalities and views
├── css/ # Stylesheets
├── images/ # Image assets
├── includes/ # Reusable PHP components and configuration
├── js/ # JavaScript files
├── php/ # Backend PHP scripts
├── sql/ # SQL scripts for database setup
├── student/ # Student-related functionalities and views
├── .gitattributes # Git attributes
├── about.php # About project/organization
├── forgot.inc.php # Password reset logic
├── forgot.php # Password reset interface
├── homestyle.css # Custom homepage styles
└── index.php # Main entry point of the application


---

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP  
- **Database:** MySQL  
- **Development Environment:** XAMPP  

---

## 🚀 Features

- **Admin Panel:** Manage companies, students, and placement drives  
- **Student Dashboard:** View and apply for placement opportunities  
- **Company Profiles:** Post job openings and track student applications  
- **Placement Tracking:** Monitor the status of placement drives and student selections  

---


---

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP  
- **Database:** MySQL  
- **Development Environment:** XAMPP  

---

## 🚀 Features

- **Admin Panel:** Manage companies, students, placement drives  
- **Student Dashboard:** View and apply for placement opportunities  
- **Company Profiles:** Post job openings and track student applications  
- **Placement Tracking:** Monitor status of placement drives and student selections  

---

## 📦 Installation Guide
1. Set Up XAMPP

Download and install XAMPP from https://www.apachefriends.org/download.html

Start Apache and MySQL services from XAMPP Control Panel

2. Configure the Database

Open phpMyAdmin: http://localhost/phpmyadmin

Create a database named placement_system

Import the SQL file located in sql/ directory to create tables

3. Update Database Credentials

Navigate to includes/config.php

Update database connection parameters:
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'placement_system');


4. Access the Application

Place the cloned repository inside htdocs/ of XAMPP

Open in browser: http://localhost/PlacePro

🧪 Testing Credentials

Admin Login:
URL: http://localhost/PlacePro/admin
Username: admin
Password: admin123

Student Login:
URL: http://localhost/PlacePro/student
Username: student
Password: student123

5.Clonig This Repo

```bash
git clone https://github.com/ThanujMaligi/PlacePro---Placement-Management-Sytem-using-Xampp.git
