export async function POST(req) {
    try {
        const data = await req.json();

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.WEB3FORMS_KEY, // 🔐 from env
                to: "gridviewmarketingagency@gmail.com",
                from_name: "GridView Website",
                subject: `New Inquiry from ${data.name}`,
                replyto: data.email,

                name: data.name,
                email: data.email,
                phone: data.phone,
                service: data.service,
                message: data.message,
            }),
        });

        const result = await response.json();

        return Response.json(result);

    } catch (error) {
        return Response.json({ success: false, message: "Server error" });
    }
}