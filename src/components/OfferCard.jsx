import "../styles/card.css"

function OfferCard({ title, price, children, style }) {
  return (
    <div className="card hover:-translate-y-2 duration-100 ease-in">
      <div
        className={
          "w-[200px] h-[300px] bg-secoundary rounded-2xl font-pregular flex flex-col " +
          style
        }
      >
        <div className="flex w-full flex-col justify-center items-center pt-7">
          {title}
        </div>
        <div className="flex w-full flex-row justify-center items-center pt-2 lg:pt-4 font-psemibold text-2xl lg:text-4xl">
          <span className="relative flex items-center">{price}<span className="font-pregular text-sm lg:text-lg absolute left-full pl-2 text-gray-400">/hónap</span></span>
        </div>
        <div className="bg-tetrary flex-1 m-3 rounded-2xl p-4 lg:p-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
