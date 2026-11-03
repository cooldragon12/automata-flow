"use client"

import { useProblem } from "@/context/problem";
import { useEffect, useRef } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BsArrowCounterclockwise, BsPauseFill, BsPlayFill, BsSkipEndFill } from "react-icons/bs";

const SPEEDS = [
  { label: "0.5×", ms: 1600 },
  { label: "1×", ms: 900 },
  { label: "2×", ms: 450 },
];

const iconButton = "grid place-items-center h-11 w-10 sm:w-11 shrink-0 rounded-xl border border-black/15 dark:border-white/15 transition-colors hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-40 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent";

const HoverMenu = () => {
  const { state, dispatch, total, result } = useProblem();
  const { status, tick, speed } = state.simulation;
  const alphabet = state.dfa.Sigma;
  const playing = status === "playing";

  // Play a sound once each time a run finishes.
  const sounds = useRef<{ ok: HTMLAudioElement; bad: HTMLAudioElement } | null>(null);
  useEffect(() => {
    sounds.current = { ok: new Audio("/sound/ping.mp3"), bad: new Audio("/sound/error.mp3") };
  }, []);
  useEffect(() => {
    if (result === null || !sounds.current) return;
    const audio = result ? sounds.current.ok : sounds.current.bad;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }, [result]);

  const onInput = (value: string) => {
    // Only symbols from the problem's alphabet can be typed.
    const filtered = value.split("").filter((c) => alphabet.includes(c)).join("");
    dispatch({ type: "ENTERED_INPUT", payload: { currentInput: filtered } });
  };

  const progress = status === "idle" || total <= 1 ? 0 : tick / (total - 1);

  return (
    <menu
      className="fixed z-20 inset-x-3 mx-auto max-w-3xl bottom-[max(0.75rem,env(safe-area-inset-bottom))] m-0 p-0 list-none
                 rounded-2xl border border-black/10 dark:border-white/15 bg-background/80 dark:bg-dark_background/80
                 backdrop-blur-md shadow-lg overflow-hidden">
      <div className="h-1 bg-black/5 dark:bg-white/10" aria-hidden>
        <div className={`h-full transition-[width] ease-linear ${result === false ? "bg-danger" : result ? "bg-success" : "bg-accent"}`}
          style={{ width: `${progress * 100}%`, transitionDuration: playing ? `${speed}ms` : "200ms" }} />
      </div>

      <div className="flex flex-col md:flex-row gap-2 p-2 sm:p-3">
        <div className="flex gap-2 flex-1 min-w-0">
          <select
            aria-label="Problem"
            value={state.selection}
            onChange={(e) => dispatch({ type: "SELECT", payload: { selection: e.target.value as "1" | "2" } })}
            className="h-11 shrink-0 rounded-xl border border-black/15 dark:border-white/15 bg-transparent dark:bg-dark_background px-2 text-base md:text-sm">
            <option value="1">Problem 1</option>
            <option value="2">Problem 2</option>
          </select>

          <div className="relative flex-1 min-w-0">
            <input
              aria-label="Input string"
              value={state.currentInput}
              onChange={(e) => onInput(e.target.value)}
              type="text" inputMode={alphabet.every((c) => /\d/.test(c)) ? "numeric" : "text"}
              autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck={false}
              placeholder={`String over {${alphabet.join(", ")}}`}
              onKeyDown={(e) => { if (e.key === "Enter") dispatch({ type: "VALIDATE", total }); }}
              className={`h-11 w-full rounded-xl border border-black/15 dark:border-white/15 bg-transparent pl-3 pr-10 font-mono
                          text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
                          ${result === null ? "" : result ? "text-success" : "text-danger"}`} />
            {result !== null && (result
              ? <AiFillCheckCircle aria-label="Accepted" className="text-2xl text-success absolute right-3 top-1/2 -translate-y-1/2" />
              : <AiFillCloseCircle aria-label="Rejected" className="text-2xl text-danger absolute right-3 top-1/2 -translate-y-1/2" />)}
          </div>
        </div>

        <div className="flex gap-1.5 sm:gap-2 items-center">
          <button type="button" onClick={() => dispatch({ type: "VALIDATE", total })}
            className="h-11 flex-1 md:flex-none min-w-0 px-2 sm:px-4 rounded-xl border border-black/15 dark:border-white/15 text-[13px] sm:text-sm font-semibold tracking-wide transition-colors hover:bg-secondary hover:border-secondary hover:text-white">
            VALIDATE
          </button>
          <button type="button" onClick={() => dispatch({ type: playing ? "PAUSE" : "PLAY", total })}
            aria-label={playing ? "Pause" : "Simulate"}
            className="h-11 flex-1 md:flex-none min-w-0 px-2 sm:px-4 rounded-xl bg-accent text-white text-[13px] sm:text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-1 transition-opacity hover:opacity-90">
            {playing ? <BsPauseFill className="text-lg shrink-0" /> : <BsPlayFill className="text-lg shrink-0" />}
            {playing ? "PAUSE" : status === "paused" ? "RESUME" : "SIMULATE"}
          </button>
          <button type="button" aria-label="Step forward" title="Step" className={iconButton}
            disabled={playing} onClick={() => dispatch({ type: "STEP", total })}>
            <BsSkipEndFill className="text-lg" />
          </button>
          <button type="button" aria-label="Reset" title="Reset" className={iconButton}
            disabled={status === "idle"} onClick={() => dispatch({ type: "RESET", total })}>
            <BsArrowCounterclockwise className="text-lg" />
          </button>
          <button type="button" title="Speed"
            aria-label={`Speed ${SPEEDS.find((s) => s.ms === speed)?.label}`}
            className={`${iconButton} text-xs font-semibold`}
            onClick={() => {
              const i = SPEEDS.findIndex((s) => s.ms === speed);
              dispatch({ type: "SET_SPEED", payload: { speed: SPEEDS[(i + 1) % SPEEDS.length].ms } });
            }}>
            {SPEEDS.find((s) => s.ms === speed)?.label}
          </button>
        </div>
      </div>
    </menu>
  );
};

export default HoverMenu;
