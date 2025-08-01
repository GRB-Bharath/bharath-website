export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }

  return response.json();
};
