export default function PaymentMethods() {
  return (
    <div>
      <div class='flex flex-row'>
        <span class='text-sm text-center w-full'>
          Supported payment methods:
        </span>
      </div>
      <div class='flex items-center justify-center gap-1'>
        <img
          role='presentation'
          src='americanExpress.svg'
          alt='amex'
          id='amex'></img>
        <img
          role='presentation'
          src='masterCard.svg'
          alt='mastercard'
          id='mastercard'></img>
        <img role='presentation' src='visaCard.svg' alt='visa' id='visa'></img>
        <img role='presentation' src='linkCard.svg' alt='link' id='link'></img>
      </div>
    </div>
  );
}
