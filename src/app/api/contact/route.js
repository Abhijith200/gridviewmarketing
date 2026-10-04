import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        return NextResponse.json({ success: true, message: "Inquiry processed via WhatsApp." });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Server error" },
            { status: 500 }
        );
    }
}