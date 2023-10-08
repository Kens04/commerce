import clsx from 'clsx';

const Price = ({
  amount,
  className,
  currencyCodeClassName
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
    {`${new Intl.NumberFormat().format(parseFloat(amount))}`}
    <span className={clsx('ml-1 inline', currencyCodeClassName)}>円</span>
  </p>
);

export default Price;
