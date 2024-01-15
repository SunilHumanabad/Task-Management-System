
# Task Management System

The technology used in developing the frontend is React.js and the database used is MYSQL. The API has been developed using Django REST Framework. 
To access it, the user has to register first using their name,email and password.
After registration, the user can login to the system using  their credentials.
In case the user forgets the password, he/she can select the FORGOT PASSWORD option and they will receive a token on their email which can be used to reset the password.
The user can perform various functionalities which include adding, editing, updating and deleting a task.


## Demo

Watch the demo video in main directory with the file name `Task Management System.mp4`


## Installation and Setup

### Database 

Create Mysql Database
```bash
task_management_system
```

### Django Rest Framework 

Change from the main directory to `Backend` directory 
```bash
cd .\Backend\
```
Install dependency from `requirements.txt` file
```bash
pip install -r requirements.txt
```

Replace the `EMAIL_USER` and `EMAIL_PASS` in `.env` file.

Run the project using the follwing cmd.

```bash
py .\manage.py runserver
```
### React JS 

Change from the main directory to `Frontend` directory 
```bash
cd .\Frontend\
```
Install all dependency using .
```bash
npm i
```
Next,  run
```bash
npm start
```   
## Overview

This project is a simple task management system. It was built using Django REST framework as backend and ReactJS as frontend.

- Allows new accounts registration, login, logout and reset password.
- JWT token based authentication system.
- Each user can create, edit, delete, any of their task.


## Connect
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sunilhumanabad/)

[![Gmail](https://img.shields.io/badge/gmail-0A66C2?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sunilhumanabad@gmail.com)


