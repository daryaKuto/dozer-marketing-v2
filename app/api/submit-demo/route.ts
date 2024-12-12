import { NextRequest, NextResponse } from 'next/server';
import Joi from 'joi';
import AWS from 'aws-sdk';
// import type { NextApiRequest, NextApiResponse } from 'next';

// Configure AWS SES
AWS.config.update({ region: 'us-east-2' });
// const ses = new AWS.SES({ apiVersion: '2010-12-01' });

// Validation schema using Joi
const requestDemoSchema = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().required(),
  companyName: Joi.string().required(),
  jobTitle: Joi.string().required(),
  phoneNumber: Joi.string()
    .pattern(/^\d{10,15}$/)
    .required(),
  fleetSize: Joi.number().min(1).required(),
  locations: Joi.array().items(Joi.string().required()).min(1).required()
});

// export async function POST(req: NextApiRequest) {
//   if (req.method === 'POST') {
//     return await addEmailUser(req);
//   } else {
//     return NextResponse.json({
//       status: 405
//     });
//   }
// }

// const addEmailUser = async (req: NextApiRequest) => {
//   console.log('request ', req);

//   console.log('process.env', process.env.BACKEND_BASE_URL);
//   try {
//     await fetch(`${process.env.BACKEND_BASE_URL}/form/submit`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(req.body)
//     });
//   } catch (err: any) {
//     console.log('err', err);
//     return NextResponse.json({
//       message: err?.details[0].message,
//       status: 500
//     });
//   }

//   return NextResponse.json({
//     message: 'Success',
//     status: 200
//   });
// };

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

    const formattedBody = {
      ...body,
      locations: body.locations.toString()
    };

    await fetch(`${process.env.BACKEND_BASE_URL}/form/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formattedBody)
    });

    return NextResponse.json({
      message: 'Success',
      status: 200
    });
  } catch (err: any) {
    return NextResponse.json({
      message: err?.details[0].message,
      status: 500
    });
  }
}

//   // Email parameters for AWS SES
//   const sendEmailParams = {
//     Source: "alamgir@dozer.ai",
//     Destination: {
//       ToAddresses: ["alamgir@dozer.ai", "support@dozer.ai"],
//     },
//     Message: {
//       Subject: {
//         Charset: "UTF-8",
//         Data: "New Demo Request",
//       },
//       Body: {
//         Text: {
//           Charset: "UTF-8",
//           Data: `
//             New demo request:

//             Full Name: ${fullName}
//             Email: ${email}
//             Company Name: ${companyName}
//             Job Title: ${jobTitle}
//             Phone Number: ${phoneNumber}
//             Fleet Size: ${fleetSize}
//             Locations: ${locations.join(", ")}
//           `,
//         },
//       },
//     },
//     ReplyToAddresses: ["alamgir@dozer.ai"],
//   };

//   // Send email using AWS SES
//   await ses.sendEmail(sendEmailParams).promise();

//   return NextResponse.json(
//     { status: "ok", message: "Form submitted successfully!" },
//     { status: 200 }
//   );
// } catch (error) {
//   console.error("Error handling request:", error);
//   return NextResponse.json(
//     { message: "Internal Server Error" },
//     { status: 500 }
//   );
// }
