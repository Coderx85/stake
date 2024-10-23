"use client"
import { BallManager } from '@/lib/classes/BallManager';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup'
import axios from 'axios';
import { FaBasketballBall } from 'react-icons/fa';

const Game = () => {
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<any>();
  const [totalResult, setTotalResult] = useState(0);
  const [countUpKey, setCountUpKey] = useState(0);
  let prevResult = 0;

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  useEffect(() => {
    setCountUpKey(prevKey => prevKey + 1);
  }, [totalResult, prevResult]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <canvas ref={canvasRef} width="800" height="700"></canvas>

      <div className="m-5">
        <CountUp key={countUpKey} start={prevResult} end={totalResult} delay={0}>
          {({ countUpRef }: { countUpRef: React.MutableRefObject<any> }) => (
            <>
              Total Points: <h3 ref={countUpRef}/>
            </>
          )}
        </CountUp>
           
        <Button
          className="px-10"
          onClick={async () => {
            const response = await axios.post(`api/game`, {
              data: 1,
            });
            const ballValue = Math.round(response.data.point)
            if (ballManager) {
              ballManager.addBall(ballValue);
              prevResult = totalResult;
              setTotalResult((prev) => (prev + ballValue));
            }
          }}
        >
          Add ball
        </Button>
        {ballManager && (
          <Button
            onClick={() => {
              setCountUpKey(() => -1);
              setTotalResult(() => 0);
              ballManager.stop();
            }}
          >
            Clear
          </Button>
        )}
        <br/>
        <h4 className='flex gap-2'><FaBasketballBall />Balls used: {countUpKey}</h4>
      </div>
    </div>
  );
}

export default Game