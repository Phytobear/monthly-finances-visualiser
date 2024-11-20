import MainHeading from "./MainHeading";
import AddNewButton from "./AddNewButton";
import StatsWrapper from "./StatsWrapper";
import SectionWrapper from "./SectionWrapper";
import PosNegButton from "./PosNegButton";
import { neuInputClasses } from "../styles/common";

export default function SavingsSection({
  setSavingsVisible,
  savingsVisible,
  savings,
  savingsTotal,
  savingsTypes,
  handleTypeChange,
  handleDeleteType,
  addNewField,
  expensesTotal,
  monthlytakeHome,
}) {
  const savingsStats = [
    {
      text: "Total Saved Monthly:",
      figure: savingsTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      percentTrue: false,
    },
    {
      text: `As Percent (of £${(monthlytakeHome - expensesTotal).toFixed(2)})`,
      figure: (
        (savingsTotal / (monthlytakeHome - expensesTotal)) *
        100
      ).toFixed(2),
      percentTrue: true,
    },
  ];

  // --- We have a look at each 'type' of saving, get the value associated, then push to our 'stats array' the information needed:
  savingsTypes.map((type) => {
    const matchedValue = savings
      .filter((each) => each.savingType == type)
      .reduce((acc, curr) => acc + parseInt(curr.savingValue), 0);
    return savingsStats.push({
      text: `Total in ${type}s:`,
      figure: matchedValue.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      percentTrue: false,
    });
  });

  function savingsExceedFunds() {
    return monthlytakeHome - expensesTotal - savingsTotal > 0 ? false : true;
  }

  return (
    <SectionWrapper>
      <MainHeading
        onClickFunction={() => setSavingsVisible(!savingsVisible)}
        text={"Savings"}
        visibility={savingsVisible}
      />

      <div className="flex justify-evenly gap-6 text-gray-700">
        <p className="flex gap-2 items-center font-light">
          Unallocated Funds:
          <span
            className={savingsExceedFunds() ? "text-red-500" : "text-gray-700"}
          >
            £{(monthlytakeHome - expensesTotal - savingsTotal).toFixed(2)}
          </span>
        </p>
        <p className="flex gap-2 items-center font-light">
          As Percent:
          <span
            className={savingsExceedFunds() ? "text-red-500" : "text-gray-700"}
          >
            {(
              ((monthlytakeHome - expensesTotal - savingsTotal) /
                (monthlytakeHome - expensesTotal)) *
              100
            ).toFixed(2)}
            %
          </span>
        </p>
      </div>

      {savingsVisible && (
        <>
          <scroll-shadow>
            <div
              className="hidden-scrollbar min-w-[600px] overflow-x-scroll whitespace-nowrap flex flex-col gap-4 
              bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-neu-pressed"
            >
              <div className="flex gap-2 justify-between items-center text-center mx-2 text-gray-700">
                <p className="w-3/12">What is it?</p>
                <p className="w-2/12">How much?</p>
                <p className="w-2/12">Type?</p>
                <p className="w-2/12">Location?</p>
                <p className="w-2/12">Get rid!</p>
              </div>
              {savings.map((item, index) => (
                <div className="flex gap-2 justify-between text-sm" key={index}>
                  <input
                    name="savingName"
                    type="text"
                    placeholder="Name of Saving"
                    className={`${neuInputClasses} w-3/12`}
                    value={item.savingName}
                    onChange={(event) =>
                      handleTypeChange(event, index, "saving")
                    }
                  />
                  <input
                    name="savingValue"
                    type="number"
                    min={1}
                    placeholder="Amount"
                    className={`${neuInputClasses} w-2/12`}
                    value={item.savingValue || 0}
                    onChange={(event) =>
                      handleTypeChange(event, index, "saving")
                    }
                  />
                  <select
                    name="savingType"
                    className={`${neuInputClasses} w-2/12`}
                    value={item.savingType}
                    onChange={(event) =>
                      handleTypeChange(event, index, "saving")
                    }
                  >
                    {savingsTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <input
                    name="savingLocation"
                    type="text"
                    placeholder="Location"
                    className={`${neuInputClasses} w-2/12`}
                    value={item.savingLocation}
                    onChange={(event) =>
                      handleTypeChange(event, index, "saving")
                    }
                  />
                  <div className="w-2/12 text-center">
                    <PosNegButton
                      text="Delete"
                      onClickFunction={() => handleDeleteType(index, "saving")}
                      positive={false}
                      conditionalCheck={savings.length === 1}
                    />
                  </div>
                </div>
              ))}
            </div>
          </scroll-shadow>

          <AddNewButton
            onClickFunction={() => addNewField("saving")}
            text={savingsExceedFunds() ? "Not enough funds" : "Add New Saving"}
            disabled={savingsExceedFunds()}
          />

          {isNaN(savingsTotal) ? (
            <p className="text-red-500">Check your amounts!</p>
          ) : (
            <StatsWrapper stats={savingsStats} />
          )}
        </>
      )}
    </SectionWrapper>
  );
}
