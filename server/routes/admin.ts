import type { Express } from "express";
import { storage } from "../storage";
import { requireAuth, adminCredentials, type AuthRequest } from "../middleware/auth";

export function registerAdminRoutes(app: Express) {
  // Admin login page
  app.get("/admin/login", (req, res) => {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Admin Login - Bharath Shetty Portfolio</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            background: #121212; 
            color: white; 
            margin: 0; 
            padding: 0; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            min-height: 100vh;
          }
          .login-container { 
            background: #1a1a1a; 
            padding: 40px; 
            border-radius: 12px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border: 1px solid #333;
            width: 100%;
            max-width: 400px;
          }
          h1 { 
            color: #ff6b35; 
            text-align: center; 
            margin-bottom: 30px;
            font-size: 24px;
          }
          .form-group { 
            margin-bottom: 20px; 
          }
          label { 
            display: block; 
            margin-bottom: 5px; 
            color: #ff6b35;
            font-weight: bold;
          }
          input[type="email"], input[type="password"] { 
            width: 100%; 
            padding: 12px; 
            border: 1px solid #333; 
            border-radius: 6px; 
            background: #2a2a2a; 
            color: white; 
            font-size: 16px;
            box-sizing: border-box;
          }
          input[type="email"]:focus, input[type="password"]:focus { 
            outline: none; 
            border-color: #ff6b35; 
            box-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
          }
          .login-btn { 
            width: 100%; 
            padding: 12px; 
            background: #ff6b35; 
            color: white; 
            border: none; 
            border-radius: 6px; 
            font-size: 16px; 
            font-weight: bold; 
            cursor: pointer; 
            transition: all 0.3s ease;
          }
          .login-btn:hover { 
            background: #e55a2b; 
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 107, 53, 0.4);
          }
          .error { 
            color: #ff4444; 
            text-align: center; 
            margin-top: 15px; 
            padding: 10px;
            background: rgba(255, 68, 68, 0.1);
            border: 1px solid #ff4444;
            border-radius: 6px;
          }
          .brand { 
            text-align: center; 
            margin-bottom: 30px; 
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="login-container">
          <div class="brand">
            <h2 style="color: #ff6b35; margin: 0;">Portfolio Admin</h2>
            <p style="margin: 5px 0 0 0;">Bharath Shetty</p>
          </div>
          
          <h1>Admin Login</h1>
          
          <form method="POST" action="/admin/login">
            <div class="form-group">
              <label for="username">Username (Email)</label>
              <input type="email" id="username" name="username" autocomplete="email" required>
            </div>
            
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" autocomplete="current-password" required>
            </div>
            
            <button type="submit" class="login-btn">Login</button>
            
            ${req.query.error ? '<div class="error">Invalid username or password</div>' : ''}
          </form>
        </div>
      </body>
      </html>
    `;
    res.send(html);
  });

  // Admin login POST
  app.post("/admin/login", (req: AuthRequest, res) => {
    const { username, password } = req.body;
    
    console.log('Login attempt:', { username, passwordLength: password ? password.length : 0 });
    console.log('Expected credentials:', { 
      username: adminCredentials.username, 
      passwordLength: adminCredentials.password.length 
    });
    
    if (username === adminCredentials.username && password === adminCredentials.password) {
      console.log('Login successful, setting session');
      req.session.isAdmin = true;
      
      // Save session explicitly
      req.session.save((err: any) => {
        if (err) {
          console.error('Session save error:', err);
          res.redirect('/admin/login?error=1');
        } else {
          console.log('Session saved successfully');
          res.redirect('/admin/contacts');
        }
      });
    } else {
      console.log('Login failed - invalid credentials');
      res.redirect('/admin/login?error=1');
    }
  });

  // Admin logout
  app.post("/admin/logout", (req: AuthRequest, res) => {
    console.log('Logout requested');
    req.session.isAdmin = false;
    req.session.destroy((err: any) => {
      if (err) {
        console.error('Session destroy error:', err);
      }
      res.redirect('/admin/login');
    });
  });

  // Redirect /admin to /admin/contacts
  app.get("/admin", requireAuth, (req, res) => {
    res.redirect('/admin/contacts');
  });

  // Admin route to view all contacts in a web interface (protected)
  app.get("/admin/contacts", requireAuth, async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Contact Form Submissions - Admin</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; background: #121212; color: white; }
            .container { max-width: 1200px; margin: 0 auto; }
            h1 { color: #ff6b35; text-align: center; }
            .contact-card { 
              background: #1a1a1a; 
              border: 1px solid #333; 
              border-radius: 8px; 
              padding: 20px; 
              margin: 20px 0; 
              box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            }
            .contact-header { 
              display: flex; 
              justify-content: space-between; 
              align-items: center; 
              border-bottom: 1px solid #333; 
              padding-bottom: 10px; 
              margin-bottom: 15px; 
            }
            .contact-id { color: #ffb84d; font-weight: bold; }
            .contact-date { color: #999; font-size: 0.9em; }
            .contact-field { margin: 10px 0; }
            .field-label { color: #ff6b35; font-weight: bold; }
            .field-value { margin-left: 10px; }
            .message-box { 
              background: #2a2a2a; 
              padding: 15px; 
              border-radius: 5px; 
              margin-top: 10px; 
              white-space: pre-wrap; 
            }
            .no-contacts { text-align: center; color: #999; margin-top: 50px; }
            .refresh-btn { 
              background: #ff6b35; 
              color: white; 
              border: none; 
              padding: 10px 20px; 
              border-radius: 5px; 
              cursor: pointer; 
              font-weight: bold; 
            }
            .refresh-btn:hover { background: #e55a2b; }
          </style>
        </head>
        <body>
          <script>
            function confirmClearDatabase() {
              if (confirm('⚠️ WARNING: This will permanently delete ALL contact form submissions!\\n\\nThis action cannot be undone. Are you sure?')) {
                if (confirm('🚨 FINAL CONFIRMATION: Really delete all contact data?')) {
                  fetch('/admin/clear-database', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                  })
                  .then(response => response.json())
                  .then(data => {
                    if (data.success) {
                      alert('✅ Database cleared successfully!');
                      location.reload();
                    } else {
                      alert('❌ Error: ' + data.message);
                    }
                  })
                  .catch(error => {
                    alert('❌ Error clearing database: ' + error.message);
                  });
                }
              }
            }
          </script>
          <div class="container">
            <h1>📧 Contact Form Submissions</h1>
            <div style="text-align: center; margin-bottom: 30px;">
              <button class="refresh-btn" onclick="location.reload()">🔄 Refresh</button>
              <button class="clear-btn" onclick="confirmClearDatabase()" style="background: #ff6b35; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold; margin-left: 10px;">🗑️ Clear Database</button>
              <form method="POST" action="/admin/logout" style="display: inline-block; margin-left: 10px;">
                <button type="submit" style="background: #ff4444; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold;">🚪 Logout</button>
              </form>
            </div>
            
            ${contacts.length === 0 ? 
              '<div class="no-contacts">No contact submissions yet.</div>' : 
              contacts.map(contact => {
                const submissionDate = new Date(contact.createdAt);
                const formattedDate = submissionDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                });
                const formattedTime = submissionDate.toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                });
                
                return `
                <div class="contact-card">
                  <div class="contact-header">
                    <span class="contact-id">#${contact.id}</span>
                    <span class="contact-date">${formattedDate} at ${formattedTime}</span>
                  </div>
                  
                  <div class="contact-field">
                    <span class="field-label">Name:</span>
                    <span class="field-value">${contact.name}</span>
                  </div>
                  
                  <div class="contact-field">
                    <span class="field-label">Email:</span>
                    <span class="field-value">
                      <a href="mailto:${contact.email}" style="color: #ff6b35;">${contact.email}</a>
                    </span>
                  </div>
                  
                  <div class="contact-field">
                    <span class="field-label">Subject:</span>
                    <span class="field-value">${contact.subject}</span>
                  </div>
                  
                  <div class="contact-field">
                    <span class="field-label">Message:</span>
                    <div class="message-box">${contact.message}</div>
                  </div>
                </div>
                `;
              }).join('')
            }
          </div>
        </body>
        </html>
      `;
      
      res.send(html);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).send("Error fetching contacts");
    }
  });

  // Clear database route (protected)
  app.post("/admin/clear-database", requireAuth, async (req, res) => {
    try {
      await storage.clearAllContacts();
      res.json({ success: true, message: "Database cleared successfully" });
    } catch (error) {
      console.error("Error clearing database:", error);
      res.status(500).json({ success: false, message: "Failed to clear database" });
    }
  });
}