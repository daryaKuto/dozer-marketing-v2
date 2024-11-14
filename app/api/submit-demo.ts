// api/submit-demo.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';
import AWS from 'aws-sdk';

// Configure AWS SES
AWS.config.update({ region: 'us-east-2' });
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

// Define the validation schema using Joi
const requestDemoSchema = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().required(),
  companyName: Joi.string().required(),
  ownerOrManager: Joi.string().required(),
  title: Joi.string().required(),
  fleetSize: Joi.number().integer().min(1).required(),
  locations: Joi.array().items(Joi.string()).required(),
  demoSchedule: Joi.string().valid("1-2 weeks", "1 month", "2+ months").required(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Validate the request body against the schema
  const { error } = requestDemoSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Extract form data
  const { email, fullName, companyName, ownerOrManager, title, fleetSize, locations, demoSchedule } = req.body;

  // Define the email parameters for AWS SES
  const sendEmailParams = {
    Source: 'your-verified-email@example.com', // Replace with your verified SES email address
    Destination: {
      ToAddresses: ['recipient@example.com'], // Replace with the email where you want to receive the form data
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'New Demo Request Submission',
      },
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `
            New demo request submitted:

            Full Name: ${fullName}
            Email: ${email}
            Company Name: ${companyName}
            Owner/Manager: ${ownerOrManager}
            Title: ${title}
            Fleet Size: ${fleetSize}
            Locations: ${locations.join(', ')}
            Demo Schedule: ${demoSchedule}
          `,
        },
      },
    },
  };

  try {
    // Send the email using AWS SES
    await ses.sendEmail(sendEmailParams).promise();
    return res.status(200).json({ message: 'Submission successful and email sent' });
  } catch (error) {
    console.error('Error in API submission:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}