import { NextRequest, NextResponse } from 'next/server';
import Joi from 'joi';

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
