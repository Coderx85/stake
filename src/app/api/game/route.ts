import { MULTIPLIERS, outcomes } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server"

const TOTAL_DROPS = 16;
export const POST = (req:NextRequest, res: NextResponse) => {
    try {
        let outcome = 0;
        const pattern = []
        for (let i = 0; i < TOTAL_DROPS; i++) {
            if (Math.random() > 0.5) {
                pattern.push("R")
                outcome++;
            } else {
                pattern.push("L")
            }
        }
    
        const multiplier = MULTIPLIERS[outcome];
        const possiblieOutcomes = outcomes[outcome];
    
        const data = {
            point: possiblieOutcomes[Math.floor(Math.random() * possiblieOutcomes.length || 0)],
            multiplier,
            pattern
        }
        
        return new NextResponse(JSON.stringify(data), {status: 200});

    } catch (error) {
        return new NextResponse("Failed to serve the POST method", {status: 500})
    }

}