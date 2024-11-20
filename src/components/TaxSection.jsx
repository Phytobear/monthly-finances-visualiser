import MainHeading from "./MainHeading";
import SectionWrapper from "./SectionWrapper";
import StatsWrapper from "./StatsWrapper";
export default function TaxSection({
  setTaxVisible,
  taxVisible,
  usersTaxableIncome,
  nationalInsurancePayments,
  taxPaid,
}) {
  const taxStats = [
    {
      text: "Taxable Income:",
      figure: usersTaxableIncome.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      percentTrue: false,
    },
    {
      text: "NI Payments:",
      figure: nationalInsurancePayments.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      percentTrue: false,
    },
    {
      text: "Tax Paid:",
      figure: taxPaid.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      percentTrue: false,
    },
  ];

  return (
    <SectionWrapper>
      <MainHeading
        onClickFunction={() => setTaxVisible(!taxVisible)}
        text={"Tax"}
        visibility={taxVisible}
      />

      {taxVisible ? (
        <>
          <p className="text-center font-light mb-2 text-gray-600">
            All figures are yearly
          </p>
          <StatsWrapper stats={taxStats} />
        </>
      ) : (
        ""
      )}
    </SectionWrapper>
  );
}
