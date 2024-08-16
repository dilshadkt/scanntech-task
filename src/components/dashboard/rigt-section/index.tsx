import Expenses from "./expense";
import PaymentSection from "./paymentCard";
import QuickTransfer from "./quickTransfer/indext";

const RightSection = () => {
  return (
    <div className=" lg:w-[350px] mt-4 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4  h-full">
      {/* Your cards section  */}
      <PaymentSection />
      {/* Quick Transfer  */}
      <QuickTransfer />
      {/* Exprenses  */}
      <Expenses />
    </div>
  );
};

export default RightSection;
