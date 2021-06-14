import { DataList } from "./DataList";

const timelineData = [
  {
    year: 1998,
    details: "born in 19/08/1998, it was a Wednesday.",
  },
  {
    year: 2005,
    details:
      "Went to AlRuya Bilingual School to start my education life from grade 1.",
  },
  {
    year: 2016,
    details:
      "Graduated from Alruya Bilingual School, also went to San Diego to start my next chapter of education. Studied Electrical Engineering.",
  },
  {
    year: 2020,
    details:
      "Graduated from San Diego State University with a Bachelor's Degree in Electrical Engineering.",
  },
  {
    year: 2021,
    details: "Joined Coded bootcamp",
  },
];

export const TLData = () => {
  return (
    <div>
      {timelineData.map((oneData) => (
        <DataList details={oneData.details} year={oneData.year} />
      ))}
    </div>
  );
};
