import Logo from '../shared/Logo';

const Header = () => {
  return (
    <header className='px-4 sm:px-10 lg:px-15 xl:px-30 h-20 lg:h-21.25 flex items-center justify-between'>
      <Logo />
    </header>
  );
};

export default Header;
