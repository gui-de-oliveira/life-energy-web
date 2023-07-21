import { useMemo } from "react";

let counterId = 0;
export function useGeneratedId(): string {
  return useMemo(() => {
    counterId += 1;
    return counterId.toString();
  }, []);
}
