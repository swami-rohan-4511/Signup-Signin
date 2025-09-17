-- SQL script to create the users table for Signup Project
-- Run this script in your PostgreSQL database on Render

-- Create database (if needed; on Render you usually already have it)
-- CREATE DATABASE signup_db;

-- Connect to the database
-- \c signup_db;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger to auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Create index on email for faster lookups during authentication
CREATE INDEX IF NOT EXISTS idx_email ON users(email);

-- Optional: Insert a test user (password: 'password123')
-- Use bcrypt to generate the hash first
-- INSERT INTO users (username, email, password_hash) VALUES
-- ('testuser', 'test@example.com', '$2a$10$example.hash.here');
