#!/usr/bin/env node

// Simple test script to verify admin credentials
const adminCredentials = {
  username: 'bharathb451@gmail.com',
  password: '7760344951@Grb'
};

console.log('Testing admin credentials:');
console.log('Username:', adminCredentials.username);
console.log('Password length:', adminCredentials.password.length);
console.log('Password starts with:', adminCredentials.password.substring(0, 3) + '...');

// Test comparison
const testUsername = 'bharathb451@gmail.com';
const testPassword = '7760344951@Grb';

console.log('\nTesting comparison:');
console.log('Username match:', testUsername === adminCredentials.username);
console.log('Password match:', testPassword === adminCredentials.password);

if (testUsername === adminCredentials.username && testPassword === adminCredentials.password) {
  console.log('✅ Credentials test PASSED');
} else {
  console.log('❌ Credentials test FAILED');
}
