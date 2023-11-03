import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={`hidden flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black md:flex
      ${!size ? 'h-[40px] w-[40px] rounded-xl' : ''}
      ${size === 'sm' ? 'h-[30px] w-[30px] rounded-lg' : ''}`}
    >
      <LogoIcon
        className={`${!size ? 'h-[16px] w-[16px]' : ''} ${
          size === 'sm' ? 'h-[10px] w-[10px]' : ''
        }`}
      />
    </div>
  );
}
