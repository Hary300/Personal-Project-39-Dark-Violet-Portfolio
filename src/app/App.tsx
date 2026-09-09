import LogoIcon from '@/assets/icons/react-component-icons/LogoIcon';
import { Button } from '@/components/ui/button';
import { LuMail } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import {
  FiArrowRight,
  FiCheck,
  FiMapPin,
  FiMinus,
  FiPlus,
  FiSend,
  FiSmartphone,
} from 'react-icons/fi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

function App() {
  return (
    <div className='max-w-360 mx-auto'>
      <h1>Poppins</h1>
      <Button>
        {' '}
        <FiCheck className='stroke-5' />
        <RxCross2 className='stroke-2' />
        <FiArrowRight className='stroke-5' />
        <HiOutlineChatBubbleLeftRight className='stroke-4' />
        <FiPlus className='stroke-4' />
        <FiMinus className='stroke-4' />
        <FiSmartphone className='stroke-3' />
        <FiMapPin className='stroke-3' />
        <FiSend className='stroke-3' />
        Test
      </Button>
      <LuMail className='stroke-2' />
      <LogoIcon className='text-red-500' />
    </div>
  );
}

export default App;
