'use client';

interface AppMockupProps {
  type: 'carousel' | 'newsletter' | 'studio' | 'geo';
}

export default function AppMockup({ type }: AppMockupProps) {
  if (type === 'carousel') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 p-3 flex flex-col gap-2 rounded-lg overflow-hidden">
        <div className="flex items-center gap-1.5 opacity-60">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 grid grid-cols-5 gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="rounded bg-slate-700/60 p-1.5 flex flex-col gap-1">
              <div className="h-1 w-3/4 rounded bg-indigo-400/40" />
              <div className="h-0.5 w-full rounded bg-slate-500/30" />
              <div className="h-0.5 w-2/3 rounded bg-slate-500/30" />
              <div className="mt-auto h-4 rounded bg-cyan-400/20" />
            </div>
          ))}
        </div>
        <div className="h-1.5 w-full rounded bg-indigo-500/30" />
      </div>
    );
  }

  if (type === 'newsletter') {
    return (
      <div className="w-full h-full bg-white p-3 flex flex-col gap-2 rounded-lg overflow-hidden text-slate-800">
        <div className="h-2 w-1/2 rounded bg-slate-300" />
        <div className="h-1 w-3/4 rounded bg-slate-200" />
        <div className="h-1 w-full rounded bg-slate-200" />
        <div className="h-1 w-5/6 rounded bg-slate-200" />
        <div className="h-1 w-2/3 rounded bg-slate-200" />
        <div className="mt-2 h-12 rounded bg-slate-100 border border-slate-200 flex items-center justify-center">
          <div className="h-6 w-20 rounded bg-indigo-100" />
        </div>
        <div className="mt-auto flex gap-1">
          <div className="h-1.5 w-8 rounded bg-slate-300" />
          <div className="h-1.5 w-8 rounded bg-slate-300" />
        </div>
      </div>
    );
  }

  if (type === 'studio') {
    return (
      <div className="w-full h-full bg-slate-950 p-2 flex gap-2 rounded-lg overflow-hidden">
        <div className="w-1/3 bg-slate-900 rounded p-1.5 flex flex-col gap-1.5">
          <div className="h-1.5 w-3/4 rounded bg-indigo-500/40" />
          <div className="h-1 w-full rounded bg-slate-700/50" />
          <div className="h-1 w-2/3 rounded bg-slate-700/50" />
          <div className="mt-auto h-4 rounded bg-emerald-500/30" />
        </div>
        <div className="flex-1 bg-slate-900 rounded p-2 flex flex-col gap-1.5">
          <div className="h-1.5 w-1/2 rounded bg-cyan-400/40" />
          <div className="h-8 rounded bg-slate-800/60" />
          <div className="h-1 w-full rounded bg-slate-700/50" />
          <div className="h-1 w-4/5 rounded bg-slate-700/50" />
          <div className="mt-auto flex gap-1">
            <div className="h-2 w-8 rounded bg-slate-700" />
            <div className="h-2 w-12 rounded bg-indigo-500/50" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-slate-900 p-3 flex flex-col gap-2 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="h-2 w-20 rounded bg-slate-700" />
        <div className="h-5 w-10 rounded bg-emerald-500/30 text-[8px] flex items-center justify-center text-emerald-300">60/100</div>
      </div>
      <div className="space-y-1.5">
        {[85, 60, 45, 30].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-1 w-12 rounded bg-slate-700" />
            <div className="h-1.5 rounded bg-indigo-500/50" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
      <div className="mt-auto grid grid-cols-2 gap-2">
        <div className="h-6 rounded bg-slate-800" />
        <div className="h-6 rounded bg-slate-800" />
      </div>
    </div>
  );
}
