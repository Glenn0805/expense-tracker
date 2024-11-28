import Image from "next/image";
import Header from "./component/Header";
import CreditCard from "./component/CreditCard";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
        <Header />
        <div className="p-3">
          <button className="btn btn-success">Add</button>
          <div className="flex flex-row flex-wrap gap-1">
            <CreditCard currentBalance={2999999099.23} cardColor="red" />
            <CreditCard currentBalance={2999999099.23} cardColor="green" />
            <CreditCard currentBalance={2999999099.23} cardColor="blue" />
            <CreditCard currentBalance={2999999099.23} cardColor="violet" />
            <CreditCard currentBalance={2999999099.23} cardColor="brown" />
          </div>


        </div>
      </div>
    </>
  );
}
