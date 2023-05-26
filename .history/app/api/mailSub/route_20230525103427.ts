import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextResponse } from 'next/server';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request: Request) {
    const {email} = await request.json()

    if(!email) new Response(JSON.stringify({ error: "Email is required"}))

        const res = await mailchimp.lists.addListMember(
            process.env.MAILCHIMP_AUDIENCE_ID!,
            { email_address: email, status: "subscribed"  }
        )
     return  NextResponse.json({res}, {status:200})

    


    
}
  