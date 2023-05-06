const bcrypt = require('bcrypt')

const User = require('./User');
const UserModel = require('../models/User')



describe('User', () => {
  describe('signUp', () => {
    it('should insert a new user into the database', async () => {
      // Arrange
      const user = new User({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password',
        operation: 'signUp',
      });

      // Act
      const result = await user.perform();

      // Assert
      expect(result.id).toBeGreaterThan(0);
      expect(result.name).toBe(user.name);
      expect(result.email).toBe(user.email);
    });

    it('should throw an error if the email already exists', async () => {
      // Arrange
      const existingUser = await UserModel.query().insert({
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: await bcrypt.hash('password', 10),
      });
      const user = new User({
        name: 'John Doe',
        email: 'jane@example.com',
        password: 'password',
        operation: 'signUp',
      });

      // Act & Assert
      await expect(user.perform()).rejects.toThrow('Email already exists.');
    });
  });

  describe('signIn',  () => {
    it('should return a JWT token if the email and password are correct', async () => {
      // Arrange
      const existingUser = await UserModel.query().insert({
        name: 'John Doe',
        email: 'john1@example.com',
        password: await bcrypt.hash('password', 10),
      });
      const user = new User({
        email: 'john1@example.com',
        password: 'password',
        operation: 'signIn',
      });

      // Act
      const result = await user.perform();
      console.log(result)

      // Assert
      expect(typeof result).toBe('string');
      expect(result).not.toBe('');
    });

    it('should throw an error if the email does not exist', async () => {
      // Arrange
      const user = new User({
        email: 'john2@example.com',
        password: 'password',
        operation: 'signIn',
      });

      // Act & Assert
      await expect(user.perform()).rejects.toThrow("Email doesn't exist.");
    });

    it('should throw an error if the password is incorrect', async () => {
      // Arrange
      const existingUser = await UserModel.query().insert({
        name: 'John Doe',
        email: 'john3@example.com',
        password: await bcrypt.hash('password', 10),
      });
      const user = new User({
        email: 'john3@example.com',
        password: 'wrongpassword',
        operation: 'signIn',
      });

      // Act & Assert
      await expect(user.perform()).rejects.toThrow('Wrong password');
    });
  });
});

