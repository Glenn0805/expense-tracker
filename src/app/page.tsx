import Image from "next/image";
import Header from "./component/Header";
import CreditCard from "./component/CreditCard";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
        <Header />
        <div className="p-3">
          <button className="btn btn-success mb-2">Add</button>
          <div className="flex flex-row flex-wrap gap-1">
            <CreditCard currentBalance={2999999099.23} cardColor="red" cardNumber="1231123112311231" />
            <CreditCard currentBalance={2999999099.23} cardColor="green" cardNumber="3211321132113211" />
            <CreditCard currentBalance={2999999099.23} cardColor="blue" cardNumber="1111222233334444" />
            <CreditCard currentBalance={2999999099.23} cardColor="violet" cardNumber="5555666677778888" />
            <CreditCard currentBalance={2999999099.23} cardColor="brown" cardNumber="4321432143214321" />
          </div>


        </div>
      </div>
    </>
  );
}
