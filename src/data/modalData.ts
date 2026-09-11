import errorEnvelope from '@/assets/images/modal/errorEnvelope.png';
import successEnvelope from '@/assets/images/modal/successEnvelope.png';

export type ModalStatus = 'success' | 'error';

export interface ModalContent {
  status: ModalStatus;
  illustration: {
    imgSrc: string;
    imgAlt: string;
  };
  title: string;
  description: string;
  ctaButtonText: string;
}

export interface ContactModalSection {
  success: ModalContent;
  error: ModalContent;
}

export const modalData: ContactModalSection = {
  success: {
    status: 'success',
    illustration: {
      imgSrc: successEnvelope,
      imgAlt:
        'Purple envelope illustration with green checkmark indicating successful message delivery',
    },
    title: 'Message Sent Successfully!',
    description:
      "Thank you for reaching out. I'll get back to you as soon as possible",
    ctaButtonText: 'Back to Home',
  },
  error: {
    status: 'error',
    illustration: {
      imgSrc: errorEnvelope,
      imgAlt:
        'Purple envelope illustration with red cross mark indicating failed message delivery',
    },
    title: 'Failed to send.',
    description:
      'Please check your internet connection or try refreshing the page.',
    ctaButtonText: 'Try Again',
  },
};
