import type { IconType } from 'react-icons';
import { FiSmartphone, FiMapPin, FiSend } from 'react-icons/fi';
import { LuMail } from 'react-icons/lu';

import gridPattern from '@/assets/images/gridPattern.png';

export type ContactFieldName = 'name' | 'email' | 'message';
export type ContactFieldLabel = 'Name' | 'Email' | 'Message';
export type ContactFieldType = 'text' | 'email' | 'textarea';

export interface ContactInfoItem {
  id: string;
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}

export interface ContactFormField {
  id: string;
  name: ContactFieldName;
  label: ContactFieldLabel;
  type: ContactFieldType;
}

export interface Form {
  title: string;
  submitText: string;
  submitIcon: IconType;
  fields: ContactFormField[];
}

export interface ContactData {
  title: string;
  subtitle: string;
  bgPattern: {
    imgSrc: string;
    imgAlt: string;
  };
  contactInfo: ContactInfoItem[];
  form: Form;
}

export const contactData: ContactData = {
  title: "I've been waiting for you.",
  subtitle: 'Fill in the form or Send us an email',
  bgPattern: {
    imgSrc: gridPattern,
    imgAlt: 'Perspective grid background pattern',
  },
  contactInfo: [
    {
      id: 'phone',
      icon: FiSmartphone,
      label: 'Phone Number',
      value: '+62 1234567890',
      href: 'tel:+621234567890',
    },
    {
      id: 'email',
      icon: LuMail,
      label: 'Email Address',
      value: 'hary300@email.com',
      href: 'mailto:edwinanderson@email.com',
    },
    {
      id: 'location',
      icon: FiMapPin,
      label: 'Location',
      value: 'Jakarta, Indonesia',
    },
  ],
  form: {
    title: 'Send a Message',
    submitText: 'Submit',
    submitIcon: FiSend,
    fields: [
      {
        id: 'name',
        name: 'name',
        label: 'Name',
        type: 'text',
      },
      {
        id: 'email',
        name: 'email',
        label: 'Email',
        type: 'email',
      },
      {
        id: 'message',
        name: 'message',
        label: 'Message',
        type: 'textarea',
      },
    ],
  },
};
