import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Log the received body for debugging
    console.log("Received request body:", JSON.stringify(body, null, 2));

    // Extract properties from the body
    const { properties } = body;

    // Validate required fields
    if (
      !properties ||
      !properties.email ||
      !properties.firstname ||
      !properties.lastname ||
      !properties.company ||
      !properties.jobtitle ||
      !properties.phone ||
      !properties.fleet_size ||
      !properties.site_locations
    ) {
      console.error("Validation error: Missing required fields", properties);
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the validated data for debugging
    console.log("Validated HubSpot properties:", JSON.stringify(properties, null, 2));

    // Prepare HubSpot data payload
    const hubspotData = {
      properties: {
        email: properties.email,
        firstname: properties.firstname,
        lastname: properties.lastname,
        company: properties.company, 
        jobtitle: properties.jobtitle,
        phone: properties.phone.replace(/\D/g, ""),
        fleet_size: properties.fleet_size,
        site_locations: properties.site_locations,
      },
    };

    // Log the prepared payload for debugging
    console.log("Prepared HubSpot payload:", JSON.stringify(hubspotData, null, 2));

    // Send data to HubSpot API
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_BEARER_TOKEN}`,
      },
      body: JSON.stringify(hubspotData),
    });

    // Log the response status and headers for debugging
    console.log("HubSpot response status:", response.status);
    console.log("HubSpot response headers:", response.headers);

    const data = await response.json();

    // Log the response data for debugging
    console.log("HubSpot API response data:", JSON.stringify(data, null, 2));

    // Handle error response from HubSpot API
    if (!response.ok) {
      console.error("Error from HubSpot API:", data);
      return NextResponse.json(
        { message: "Failed to submit data to HubSpot", error: data },
        { status: response.status }
      );
    }

    // Return success response
    return NextResponse.json({ status: "ok", data }, { status: 200 });
  } catch (error) {
    console.error("Error in HubSpot integration:", error);
    return NextResponse.json(
      { message: "Error submitting data to HubSpot" },
      { status: 500 }
    );
  }
}