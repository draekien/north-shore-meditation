'use client';

import { contactUsSchema, type ContactUsFormFields } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';

export type InputItem = {
  label: string;
  helpText?: string;
};

export type ContactUsFormProps = {
  form: {
    inputs: {
      [x in keyof ContactUsFormFields]-?: InputItem;
    };
    submit: {
      label: string;
    };
    privacyNotice: string;
    disclaimer: string;
  };
};

export default function ContactUsForm({
  form: {
    inputs: { givenNames, surname, email, phone, message, existing, privacy },
    submit,
    privacyNotice,
    disclaimer,
  },
}: ContactUsFormProps) {
  const form = useForm<ContactUsFormFields>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      givenNames: '',
      surname: '',
      email: '',
      phone: '',
      privacy: false,
      existing: false,
    },
  });

  async function onSubmit(values: ContactUsFormFields) {
    console.log(values);
    const response = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(values),
    });
    console.log(response);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="mt-16 bg-card/80 backdrop-blur-xl md:w-1/2">
          <CardHeader></CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="givenNames"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{givenNames.label}</FormLabel>
                  <FormControl>
                    <Input className="bg-background" {...field} />
                  </FormControl>
                  {givenNames.helpText && <FormDescription>{givenNames.helpText}</FormDescription>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{surname.label}</FormLabel>
                  <FormControl>
                    <Input className="bg-background" {...field} />
                  </FormControl>
                  {surname.helpText && <FormDescription>{surname.helpText}</FormDescription>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{email.label}</FormLabel>
                  <FormControl>
                    <Input className="bg-background" {...field} />
                  </FormControl>
                  {email.helpText && <FormDescription>{email.helpText}</FormDescription>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{phone.label}</FormLabel>
                  <FormControl>
                    <Input className="bg-background" {...field} />
                  </FormControl>
                  {phone.helpText && <FormDescription>{phone.helpText}</FormDescription>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{message.label}</FormLabel>
                  <FormControl>
                    <Textarea className="bg-background" {...field} />
                  </FormControl>
                  {message.helpText && <FormDescription>{message.helpText}</FormDescription>}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="existing"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4 space-y-0">
                  <FormControl>
                    <Switch className="bg-background" checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>{existing.label}</FormLabel>
                  {existing.helpText && <FormDescription>{existing.helpText}</FormDescription>}
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <div className="flex w-full flex-col gap-4 pt-12">
              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-4 space-y-0">
                    <FormControl>
                      <Checkbox className="bg-background" checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>{privacy.label}</FormLabel>
                    {privacy.helpText && <FormDescription>{privacy.helpText}</FormDescription>}
                  </FormItem>
                )}
              />
              <Button type="submit">{submit.label}</Button>
              <small>
                {disclaimer} <Link href="/">{privacyNotice}</Link>
              </small>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
