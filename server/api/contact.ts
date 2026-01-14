import { Resend } from 'resend';

export default defineEventHandler(async event => {
  // Only allow POST requests
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    });
  }

  // Get API key from runtime config or environment variable
  const config = useRuntimeConfig(event);
  const apiKey = config.resendApiKey || process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'Email service is not configured. Please set RESEND_API_KEY environment variable.'
    });
  }

  // Initialize Resend with API key
  const resend = new Resend(apiKey);

  try {
    const body = await readBody(event);

    // Validate required fields
    const requiredFields = [
      'fullName',
      'email',
      'phone',
      'companyName',
      'region',
      'services',
      'projectDetails'
    ];
    for (const field of requiredFields) {
      if (!body[field] || (Array.isArray(body[field]) && body[field].length === 0)) {
        throw createError({
          statusCode: 400,
          statusMessage: `Missing required field: ${field}`
        });
      }
    }

    // Format services list
    const servicesList = Array.isArray(body.services)
      ? body.services.map((s: string) => `• ${s}`).join('\n')
      : `• ${body.services}`;

    // Format region label
    const regionLabels: Record<string, string> = {
      mena: 'Middle East & North Africa',
      usa: 'USA',
      canada: 'Canada',
      ksa: 'Kingdom of Saudi Arabia',
      aunz: 'Australia & New Zealand',
      asia: 'Asia',
      europe: 'Europe',
      row: 'Rest of World'
    };
    const regionLabel = regionLabels[body.region] || body.region;

    // Create email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-radius: 3px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>You have received a new inquiry from the ITFactori website.</p>
            </div>
            
            <div class="field">
              <div class="label">Full Name:</div>
              <div class="value">${escapeHtml(body.fullName)}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${escapeHtml(body.email)}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${escapeHtml(body.phone)}</div>
            </div>
            
            <div class="field">
              <div class="label">Company Name:</div>
              <div class="value">${escapeHtml(body.companyName)}</div>
            </div>
            
            ${
              body.companyUrl
                ? `
            <div class="field">
              <div class="label">Company URL:</div>
              <div class="value">${escapeHtml(body.companyUrl)}</div>
            </div>
            `
                : ''
            }
            
            <div class="field">
              <div class="label">Region:</div>
              <div class="value">${escapeHtml(regionLabel)}</div>
            </div>
            
            <div class="field">
              <div class="label">Services Requested:</div>
              <div class="value">${servicesList
                .split('\n')
                .map((s: string) => escapeHtml(s))
                .join('<br>')}</div>
            </div>
            
            <div class="field">
              <div class="label">Project Details:</div>
              <div class="value" style="white-space: pre-wrap;">${escapeHtml(body.projectDetails)}</div>
            </div>
            
            <div class="footer">
              <p>This email was sent from the ITFactori contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission

Full Name: ${body.fullName}
Email: ${body.email}
Phone: ${body.phone}
Company Name: ${body.companyName}
${body.companyUrl ? `Company URL: ${body.companyUrl}\n` : ''}Region: ${regionLabel}
Services Requested:
${servicesList}

Project Details:
${body.projectDetails}

---
This email was sent from the ITFactori contact form.
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'ITFactori Contact Form <onboarding@resend.dev>', // You'll need to verify a domain with Resend
      to: 'affanrehman1278@gmail.com',
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.fullName}`,
      html: emailHtml,
      text: emailText
    });

    if (error) {
      console.error('Resend error:', error);
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to send email'
      });
    }

    return {
      success: true,
      message: 'Email sent successfully',
      id: data?.id
    };
  } catch (error: any) {
    console.error('Contact form error:', error);

    // If it's already a createError, re-throw it
    if (error.statusCode) {
      throw error;
    }

    // Otherwise, create a generic error
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'An error occurred while processing your request'
    });
  }
});

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m] || m);
}
