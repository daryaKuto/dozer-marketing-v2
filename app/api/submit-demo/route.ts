import { NextResponse } from 'next/server';
import Joi from 'joi';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Initialize SES Client
const sesClient = new SESClient({ region: 'us-east-2' });

// Validation schema using Joi
const requestDemoSchema = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().required(),
  companyName: Joi.string().required(),
  jobTitle: Joi.string().required(),
  phoneNumber: Joi.number().required(),
});

// POST handler
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the request body
    const { error } = requestDemoSchema.validate(body);
    if (error) {
      return NextResponse.json(
        { message: error.details[0].message },
        { status: 400 }
      );
    }

    const { email, fullName, companyName, jobTitle, phoneNumber } = body;

    // Email parameters for AWS SES
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
            `,
          },
        },
      },
      ReplyToAddresses: ['alamgir@dozer.ai'],
    };

    console.log('Sending email with AWS SES...');
    const command = new SendEmailCommand(sendEmailParams);
    const response = await sesClient.send(command);
    console.log('Email sent successfully:', response);

    return NextResponse.json(
      { status: 'ok', message: 'Submission successful and email sent' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in sending email:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}