'use client'
import {useRouter} from "next/navigation"
import { Button } from "./ui/button";

export const Quotes = () => {
  const router = useRouter();
  return (
    <div className="flex mx-16 flex-col justify-center pb-10 ">
      <h1 className="text-6xl font-bold">Play Plinko, Earn More!</h1>
      <h3 className="mt-4 text-xl mb-4">
        Stake Game Simulation is a project that simulates a game involving stakes and outcomes based on random patterns. The project includes frontend and backend components to create a visual representation of the game simulation.
      </h3>
      <Button onClick={() => router.replace("/game")}>
        Play Plinko
      </Button>
    </div>
  );
};
