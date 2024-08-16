import { Apple, Dribble, Upwork } from "../images";

export const data = [
  { name: "Jan", actualIncome: 800, projectedIncome: 2000 },
  { name: "Feb", actualIncome: 1000, projectedIncome: 4000 },
  { name: "Mar", actualIncome: 3000, projectedIncome: 2290 },
  { name: "Apr", actualIncome: 3780, projectedIncome: 2000 },
];
export const weekData = [
  { name: "Mon", value: 4000 },
  { name: "Tue", value: 3000 },
  { name: "Wed", value: 5000 },
  { name: "Thu", value: 2000 },
  { name: "Fri", value: 4000 },
];

export const tableData = [
  {
    name: "Apple TV+",
    icon: Apple,

    amount: "$110.00",
    date: "14 Apr, 2024",
    status: "Paid",
  },
  {
    name: "Dribbble",
    icon: Dribble,
    amount: "$2,000",
    date: "16 Apr, 2024",
    status: "Overdue",
  },
  {
    name: "Upwork",
    icon: Upwork,
    amount: "$1.20",
    date: "26 Apr, 2024",
    status: "Paid",
  },
];
