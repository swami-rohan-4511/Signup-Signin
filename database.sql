-- SQL script to create the users table for Signup Project
-- Run this script in your MySQL database before starting the application

CREATE DATABASE IF NOT EXISTS signup_db;
USE signup_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups during authentication
CREATE INDEX idx_email ON users(email);

-- Optional: Insert a test user (password: 'password123')
-- The password hash below is for 'password123' - you can generate new hashes using bcrypt
-- INSERT INTO users (username, email, password_hash) VALUES
-- ('testuser', 'test@example.com', '$2a$10$example.hash.here');