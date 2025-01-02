# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with provided information.

### HTTP Method

`POST` 


### Request Body

The Request Body should be in JSON format and include the following fields :

- `fullname` (object) : 
    - `firstname` (String, required) : User's first name (minimum 3 characters).
    - `lastname` (String, optional) : User's last name (minimum 3 characters).
- `email` (String, required) : User's email address (must be a valid email).
- `password` (String, required) : User's password (minimum 6 characters).

### Example Response 

- `user` (object) : 
    - `firstname` (String) : User's first name (minimum 3 characters).
    - `lastname` (String) : User's last name (minimum 3 characters).
- `email` (String) : User's email address (must be a valid email).
- `password` (String) : User's password (minimum 6 characters).
- `token` (String) : JWT Token