import ActionCard from "../components/ActionCard";

import { useEffect, useState } from "react";
import Login from "./Login";

const Home = () => {
  const actions = [
    {
      title: "Raffle Event Management",
      description:
        "Monitor and manage the raffle entries generated from user transactions. Ensure fairness and accuracy while overseeing participant eligibility and draw results.",
      url: "/raffle",
    },
    {
      title: "AI Fraud Watch",
      description:
        "Leverage AI to analyze client transactions for suspicious activity.",
      url: "/raffle",
    },
  ];

  return (
    <main>
      <section className="flex flex-col items-center">
        <h1 className="text-3xl">Welcome, admin!</h1>
        <h2 className="text-2xl">What shall we do today?</h2>
      </section>
      <section>
        <div className="flex w-11/12 mx-auto space-x-4">
          {actions.map((action) => (
            <ActionCard
              title={action.title}
              description={action.description}
              url={action.url}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Home;
