# Task Management Application

This is a task management application built using Angular. The application allows users to add, edit, delete, and list tasks. Users can have different roles (Admin, Manager, User) with specific permissions for each role.

## Features

- User authentication (login)
- Role-based access control (Admin, Manager, User)
- Create, edit, delete, and list tasks
- Assign tasks to users
- Task status management
- Responsive design

## User Login:

- You can login as **Admin** using: **username:** 'yassin' , **password:** '123456'
- You can login as **Manager** using: **username:** 'mohamed' , **password:** '123456'
- You can login as **User** using: **username:** 'ali' , **password:** '123456'


## User Roles

- **Admin**: Can delete tasks, define new users, and assign roles.
- **Manager**: Can create and edit tasks, assign tasks to users.
- **User**: Can view tasks assigned to them.

## Technologies Used

- Angular
- TypeScript
- RxJS
- Angular Reactive Forms
- SCSS
- NgRx

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Yassinmoh/Task-Management-App
    ```

2. Navigate to the project directory:

    ```sh
    cd task-management-app
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. Start the development server:

    ```sh
    ng serve
    ```

    The application should now be running on `http://localhost:4200`.

## Usage

### Login

1. Enter your username and password on the login page.
2. Click on the "Login" button to access the application.

### Add New User (Admin Only)

1. Click on the "Add User" button.
2. Fill out the user form with the username, password, and role.
3. Click on the "Add" button to create the user.

### Manage Tasks

#### Add Task (Manager Only)

1. Click on the "Add Task" button.
2. Fill out the task form with the title, description, status, and assigned user.
3. Click on the "Add" button to create the task.

#### Edit Task (Manager Only)

1. Click on the edit icon next to the task you want to edit.
2. Update the task details in the form.
3. Click on the "Save" button to save the changes.

#### Delete Task (Admin Only)

1. Click on the delete icon next to the task you want to delete.
