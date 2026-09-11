import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { ModalContent } from '@/data/modalData';

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  modal: ModalContent;
}

const ContactModal = ({ modal, onOpenChange, isOpen }: ContactModalProps) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={isOpen}>
      <DialogContent
        showCloseButton={false}
        className='sm:max-w-119.75 rounded-xl lg:rounded-2xl'
      >
        <div className='relative flex flex-col gap-6 p-6 lg:p-8 items-center'>
          <div className='max-w-[231.93px]'>
            <img
              src={modal.illustration.imgSrc}
              alt={modal.illustration.imgAlt}
            />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <p className='font-semibold text-lg lg:text-xl'>{modal.title}</p>
            <p className='text-sm lg:text-md text-neutral-500'>
              {modal.description}
            </p>
          </div>
          <Button onClick={() => onOpenChange(false)} className='w-full'>
            {modal.ctaButtonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
