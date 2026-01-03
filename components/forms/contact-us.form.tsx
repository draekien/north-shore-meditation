'use client';

import { useToast } from '@/hooks/use-toast';
import { contactUsSchema, type ContactUsFormFields } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, buttonVariants } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Switch } from '../ui/switch';
import { Textarea } from '../ui/textarea';

export type InputItem = {
  label: string;
  helpText?: string;
  placeholder?: string;
  options?: Array<{ text: string; value: string }>;
};

export type ContactUsFormProps = {
  form: {
    inputs: {
      [x in keyof ContactUsFormFields]-?: InputItem;
    };
    submit: {
      label: string;
      loading: string;
      submitted: string;
    };
    privacyNotice: string;
    disclaimer: string;
  };
};

type FormStatus = 'waiting' | 'submitting' | 'submitted' | 'errored';

export default function ContactUsForm({
  form: {
    inputs: { givenNames, surname, email, phone, message, existing, privacy, enquiryType },
    submit,
    privacyNotice,
    disclaimer,
  },
}: ContactUsFormProps) {
  const searchParams = useSearchParams();
  const preselectedEnquiryType = searchParams.get('q') ?? undefined;

  const form = useForm<ContactUsFormFields>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      givenNames: '',
      surname: '',
      email: '',
      phone: '',
      privacy: false,
      existing: false,
      enquiryType: preselectedEnquiryType,
    },
  });

  const { toast } = useToast();

  const [formStatus, setFormStatus] = useState<FormStatus>('waiting');

  const onSubmit = useCallback(
    async (values: ContactUsFormFields) => {
      try {
        setFormStatus('submitting');
        const response = await fetch('/api/send', {
          method: 'POST',
          body: JSON.stringify(values),
        });

        if (response.ok) {
          toast({
            title: 'Enquiry submitted',
            description:
              "We will get back to you within 1-2 business days. Please check your spam folder if you don't receive a reply",
          });
          setFormStatus('submitted');
          return;
        }

        throw new Error('Failed to send enquiry');
      } catch {
        toast({
          title: "We couldn't send your enquiry",
          description: 'Please try again later, or contact us by giving us a call',
        });
        setFormStatus('errored');
      }
    },
    [toast]
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="bg-card/80 mt-16 backdrop-blur-xl md:w-1/2">
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
              name="enquiryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{enquiryType.label}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={enquiryType.placeholder} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {enquiryType.options!.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.text}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {enquiryType.helpText && <FormDescription>{enquiryType.helpText}</FormDescription>}
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
              <Button type="submit" disabled={formStatus !== 'waiting' && formStatus !== 'errored'}>
                {formStatus === 'submitting'
                  ? submit.loading
                  : formStatus === 'submitted'
                    ? submit.submitted
                    : submit.label}
              </Button>
              <small>
                {disclaimer}
                <Link
                  href="/privacy-notice"
                  className={buttonVariants({
                    variant: 'link',
                    size: 'sm',
                  })}
                >
                  {privacyNotice}
                </Link>
              </small>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
