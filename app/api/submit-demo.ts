import type { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';
import AWS from 'aws-sdk';

// Configure AWS SES
AWS.config.update({ region: 'us-east-2' });
const ses = new AWS.SES({ apiVersion: '2010-12-01' });

// Validation schema using Joi
const requestDemoSchema = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().required(),
  companyName: Joi.string().required(),
  jobTitle: Joi.string().required(),
  phoneNumber: Joi.string().pattern(/^[0-9]{10,15}$/).required(),
  locations: Joi.array().items(Joi.string()).required(),
  demoSchedule: Joi.string().valid("1-2 weeks", "1 month", "2+ months").required(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Validate the request body
  const { error } = requestDemoSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Extract form data
  const { email, fullName, companyName, jobTitle, phoneNumber, locations, demoSchedule } = req.body;

  // Define email parameters for AWS SES
  const sendEmailParams = {
    Source: 'alamgir@dozer.ai', // Verified email address
    Destination: {
      ToAddresses: ['alamgir@dozer.ai', 'support@dozer.ai'], // Recipients
    },
    Message: {
      Subject: {
        Charset: 'UTF-8',
        Data: 'SOMEONE WANTS A DEMO',
      },
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `
            A new demo request has been submitted:

            Full Name: ${fullName}
            Email: ${email}
            Company Name: ${companyName}
            Job Title: ${jobTitle}
            Phone Number: ${phoneNumber}
            Locations: ${locations.join(', ')}
            Demo Schedule: ${demoSchedule}
          `,
        },
      },
    },
    ReplyToAddresses: ['alamgir@dozer.ai'],
  };

  try {
    // Send email using AWS SES
    const response = await ses.sendEmail(sendEmailParams).promise();
    console.log('Email sent:', response);
    res.status(200).json({ status: 'ok', message: 'Submission successful and email sent' });
  } catch (error) {
    console.error('Error in sending email:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}