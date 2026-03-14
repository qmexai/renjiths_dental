import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // In a real application, you would send an email here using EmailJS, SendGrid, Nodemailer, etc.
        // For now, we mock the successful receipt of data.
        console.log("Received contact form submission:", data);

        return NextResponse.json(
            { success: true, message: "Message received successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing form:", error);
        return NextResponse.json(
            { success: false, message: "Failed to process request." },
            { status: 500 }
        );
    }
}
