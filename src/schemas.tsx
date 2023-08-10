import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),

  powerDistributionCompany: z.string(),
  tension: z.string(),
  circuitBreakerAmp: z.number(),
  roofType: z.string(),
  nrOfModules: z.number(),
  panelPotency: z.number(),

  energyConsumption: z.number().array(),
  energyProduction: z.number().array(),
  ugId: z.number(),
  ucCode: z.string(),
  groupType: z.string(),
  fare: z.number(),

  valueWithoutSolar: z.number(),
  valueWithSolar: z.number(),

  equipments: z.object({
    modules: z.string().array(),
    inversors: z.string().array(),
    structures: z.string().array(),
  }),

  investment: z.object({
    totalValue: z.number(),
    specifics: z.number(),
    paybackRate: z.number(),
    tirPercentage: z.number(),
    vplValue: z.number(),
    fcPeriod: z.number(),
    bankSimulation: z.string(),
    nrOfPayments: z.number(),
    monthlyPaymentValue: z.number(),
  }),

  createdDate: z.string().datetime(),
  dueDate: z.string().datetime(),
});
export type Project = z.infer<typeof projectSchema>;

const apiProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  createdDate: z.string().datetime(),

  yearlyConsumption: z.number(),
  powerDistributionCompany: z.string(),
  tension: z.string(),
  circuitBreakerAmp: z.number(),
  roofType: z.string(),
  estimatedYearlyProduction: z.number(),
  necessaryArea: z.number(),
  potency: z.number(),
  nrOfModules: z.number(),

  energyConsumption: z.number().array(),
  energyProduction: z.number().array(),
  ugId: z.number(),
  ucCode: z.string(),
  groupType: z.string(),
  fare: z.number(),

  valueWithoutSolar: z.number(),
  valueWithSolar: z.number(),

  equipments: z.object({
    modules: z.string().array(),
    inversors: z.string().array(),
    structures: z.string().array(),
  }),

  investment: z.object({
    totalValue: z.number(),
    specifics: z.number(),
    paybackRate: z.number(),
    tirPercentage: z.number(),
    vplValue: z.number(),
    fcPeriod: z.number(),
    bankSimulation: z.string(),
    nrOfPayments: z.number(),
    monthlyPaymentValue: z.number(),
  }),

  dueDate: z.string().datetime(),
});

export type ApiProject = z.infer<typeof apiProjectSchema>;
