import MainHeading from "./MainHeading";
import AddNewButton from "./AddNewButton";
import "scroll-shadow-element";
import StatsWrapper from "./StatsWrapper";
import SectionWrapper from "./SectionWrapper";
import PosNegButton from "./PosNegButton";
import { neuInputClasses } from "../styles/common";

export default function ExpensesSection({
  setExpensesVisible,
  expensesVisible,
  expenses,
  handleTypeChange,
  handleDeleteType,
  addNewField,
  expensesTotal,
  monthlytakeHome,
}) {
  const expensesStats = [
    {
      text: "Total Expenses:",
      figure: expensesTotal.toFixed(2),
      percentTrue: false,
    },
    {
      text: "Income Remaining:",
      figure: (monthlytakeHome - expensesTotal).toFixed(2),
      percentTrue: false,
    },
    {
      text: "% of Income Remaining:",
      figure: (
        ((monthlytakeHome - expensesTotal) / monthlytakeHome) *
        100
      ).toFixed(1),
      percentTrue: true,
    },
  ];

  return (
    <SectionWrapper>
      <MainHeading
        mainColour={"bg-neu-base"}
        hoverColour={"hover:shadow-neu-pressed"}
        onClickFunction={() => setExpensesVisible(!expensesVisible)}
        text={"Expenses"}
        visibility={expensesVisible}
      />
      <p className="text-center font-light mb-2 text-gray-600">
        All figures are monthly
      </p>

      {expensesVisible && (
        <>
          <scroll-shadow>
            <div
              className="hidden-scrollbar overflow-x-scroll whitespace-nowrap flex flex-col gap-4 max-h-52
              bg-neu-base rounded-xl p-6 shadow-neu-pressed"
            >
              <div className="flex gap-2 justify-between items-center text-center mx-2 text-gray-700">
                <p className="w-5/12">What is it?</p>
                <p className="w-4/12">How much?</p>
                <p className="w-2/12">Get rid!</p>
              </div>
              <div className="flex flex-col gap-4">
                {expenses.map((item, index) => (
                  <div
                    className="flex gap-2 justify-between items-center"
                    key={index}
                  >
                    <input
                      name="expenseName"
                      type="text"
                      placeholder="Name of Expense"
                      className={`${neuInputClasses} w-5/12`}
                      value={item.expenseName}
                      onChange={(event) =>
                        handleTypeChange(event, index, "expense")
                      }
                    />
                    <input
                      name="expenseValue"
                      type="number"
                      placeholder="Enter Monthly Amount"
                      className={`${neuInputClasses} w-4/12 ${
                        isNaN(item.expenseValue) ? "bg-red-50" : ""
                      }`}
                      value={
                        item.expenseValue === "Enter a number"
                          ? 0
                          : item.expenseValue || 0
                      }
                      onChange={(event) =>
                        handleTypeChange(event, index, "expense")
                      }
                    />
                    <div className="w-2/12 text-center">
                      <PosNegButton
                        text="Delete"
                        onClickFunction={() =>
                          handleDeleteType(index, "expense")
                        }
                        positive={false}
                        conditionalCheck={expenses.length === 1}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </scroll-shadow>

          <AddNewButton
            onClickFunction={() => addNewField("expense")}
            text={"Add New Expense"}
          />
        </>
      )}

      {isNaN(expensesTotal) ? (
        <p className="text-red-500">Check your amounts!</p>
      ) : (
        <StatsWrapper stats={expensesStats} />
      )}
    </SectionWrapper>
  );
}
