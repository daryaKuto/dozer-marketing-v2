import { NextRequest, NextResponse } from "next/server";
import Joi from "joi";
import AWS from "aws-sdk";

// Configure AWS SES
AWS.config.update({ region: "us-east-2" });
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// Validation schema using Joi
const requestDemoSchema = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().required(),
  companyName: Joi.string().required(),
  jobTitle: Joi.string().required(),
  phoneNumber: Joi.string().pattern(/^\d{10,15}$/).required(),
  fleetSize: Joi.number().min(1).required(),
  locations: Joi.array().items(Joi.string().required()).min(1).required(),
});

export async function POST(req: NextRequest) {
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

    const { email, fullName, companyName, jobTitle, phoneNumber, fleetSize, locations } = body;

    // Email parameters for AWS SES
    const sendEmailParams = {
      Source: "alamgir@dozer.ai",
      Destination: {
        ToAddresses: ["alamgir@dozer.ai", "support@dozer.ai"],
      },
      Message: {
        Subject: {
          Charset: "UTF-8",
          Data: "New Demo Request",
        },
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: `
              New demo request:

              Full Name: ${fullName}
              Email: ${email}
              Company Name: ${companyName}
              Job Title: ${jobTitle}
              Phone Number: ${phoneNumber}
              Fleet Size: ${fleetSize}
              Locations: ${locations.join(", ")}
            `,
          },
        },
      },
      ReplyToAddresses: ["alamgir@dozer.ai"],
    };

    // Send email using AWS SES
    await ses.sendEmail(sendEmailParams).promise();

    return NextResponse.json(
      { status: "ok", message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling request:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}