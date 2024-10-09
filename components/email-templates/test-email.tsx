import type { ContactUsFormFields } from '@/lib/schemas';
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const TestTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export function ContactUsTemplate({ givenNames, surname, email, phone, existing, message }: ContactUsFormFields) {
  return (
    <div>
      <h1>An enquiry has been submitted</h1>
      <dl>
        <dt>Given Names</dt>
        <dd>{givenNames}</dd>
        <dt>Surname</dt>
        <dd>{surname}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
        <dt>Phone</dt>
        <dd>{phone}</dd>
        <dt>Already Learned TM</dt>
        <dd>{existing ? 'Yes' : 'No'}</dd>
      </dl>
      <h2>Message</h2>
      <p>{message}</p>
    </div>
  );
}
