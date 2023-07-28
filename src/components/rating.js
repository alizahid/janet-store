import { range } from "lodash";
import { twMerge } from "tailwind-merge";

export function Rating({ count, rating }) {
  return (
    <div className="flex gap-2">
      <div className="flex">
        {range(5).map((index) => (
          <svg
            key={index}
            fill="currentColor"
            viewBox="0 0 24 24"
            className={twMerge(
              "w-6 h-6",
              rating > index ? "text-amber-400" : "text-neutral-400"
            )}
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>

      <div>{count}</div>
    </div>
  );
}
