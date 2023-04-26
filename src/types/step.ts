export const STEPS = {
  0: "PersonalInfo",
  1: "SelectPlan",
  2: "AddOns",
  3: "FinishingUp",
  4: "Thank",
} as const;

export type Steps = (typeof STEPS)[keyof typeof STEPS];
