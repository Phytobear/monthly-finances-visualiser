import { useEffect, useRef, useState } from "react";
import MainHeading from "./MainHeading";
import SectionWrapper from "./SectionWrapper";
import StatsWrapper from "./StatsWrapper";
export default function IncomeSection({
  setIncomeVisible,
  incomeVisible,
  userIncome,
  setUserIncome,
  annualTakeHome,
  monthlytakeHome,
}) {
  const [inputVisible, setInputVisible] = useState(false);
  const inputref = useRef(null);
  const incomeStats = [
    {
      text: "Annual take home pay:",
      figure: annualTakeHome.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      percentTrue: false,
    },
    {
      text: "Monthly take home pay:",
      figure: monthlytakeHome.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      percentTrue: false,
    },
  ];

  useEffect(() => {
    if (inputVisible) {
      inputref.current.focus();
    }
  }, [inputVisible]);

  return (
    <SectionWrapper>
      <MainHeading
        onClickFunction={() => setIncomeVisible(!incomeVisible)}
        text={"Income"}
        visibility={incomeVisible}
      />

      <label
        htmlFor="userIncome"
        className="text-center font-light text-lg text-gray-700"
      >
        Your Annual Income:{" "}
        {!inputVisible ? (
          <button
            className="ml-2 rounded-xl bg-white/90 text-3xl text-gray-700 px-4 py-2
              shadow-neu-pressed hover:shadow-neu-component
              transition-all duration-200"
            onClick={() => setInputVisible(true)}
          >
            £
            {userIncome.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </button>
        ) : (
          <input
            id="input"
            ref={inputref}
            onBlur={() => setInputVisible(false)}
            name="userIncome"
            type="number"
            min={0}
            placeholder="Enter here"
            value={userIncome === 0 ? "" : userIncome}
            className="ml-2 rounded-xl bg-white/90 text-3xl text-gray-700 px-4 py-2
              shadow-neu-pressed focus:shadow-neu-component
              transition-all duration-200 outline-none max-w-48"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setInputVisible(false);
              }
            }}
            onChange={(event) => {
              let income = Number(event.target.value.replace(/[^0-9.]/g, ""));
              setUserIncome(income ? parseFloat(income) : 0);
            }}
          />
        )}
      </label>

      {incomeVisible && (
        <div className="w-full flex flex-col items-center gap-4">
          <StatsWrapper stats={incomeStats} />
        </div>
      )}
    </SectionWrapper>
  );
}
