import { ContactUsTemplate } from '@/components/email-templates/test-email';
import { contactUsSchema } from '@/lib/schemas';
import type { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    var contactUsData = await contactUsSchema.parseAsync(formData);

    const { data, error } = await resend.emails.send({
      from: 'Website Enquiries <enquiries@northshoremeditation.au>',
      to: ['tm@northshoremeditation.au'],
      subject: `Website Enquiry | ${contactUsData.givenNames} ${contactUsData.surname}`.trim(),
      react: ContactUsTemplate(contactUsData),
      text: JSON.stringify(contactUsData),
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
