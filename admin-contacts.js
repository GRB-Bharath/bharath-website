// Simple script to view all contact form submissions
// Run this with: node admin-contacts.js

import { db } from './server/db.js';
import { contacts } from './shared/schema.js';

async function viewContacts() {
  try {
    console.log('📧 Fetching all contact form submissions...\n');
    
    const allContacts = await db.select().from(contacts);
    
    if (allContacts.length === 0) {
      console.log('No contact submissions found yet.');
      return;
    }
    
    console.log(`Found ${allContacts.length} contact submission(s):\n`);
    
    allContacts.forEach((contact, index) => {
      console.log(`--- Contact #${index + 1} ---`);
      console.log(`ID: ${contact.id}`);
      console.log(`Name: ${contact.name}`);
      console.log(`Email: ${contact.email}`);
      console.log(`Subject: ${contact.subject}`);
      console.log(`Message: ${contact.message}`);
      console.log(`Submitted: ${new Date(contact.createdAt).toLocaleString()}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('Error fetching contacts:', error);
  }
}

viewContacts();