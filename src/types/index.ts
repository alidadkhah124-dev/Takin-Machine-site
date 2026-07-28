export interface MaterialSetting {
  id: number;
  material_name: string;
  material_name_fa: string;
  cutting_speed: number;
  feed_rate: number;
  density: number;
  cost_per_kg: number;
  machining_coefficient: number;
}

export interface ToleranceCoefficient {
  id: number;
  tolerance_name: string;
  tolerance_name_fa: string;
  coefficient: number;
}

export interface ThreadCoefficient {
  id: number;
  thread_type: string;
  thread_type_fa: string;
  coefficient: number;
  time_per_thread: number;
}

export interface AdminSetting {
  id: number;
  setting_key: string;
  setting_value: { value: number | string };
  description: string;
}

export interface MachiningStep {
  diameter: number;
  length: number;
  tolerance: string;
  threadType: string;
  threadSize: string;
  threadPitch: string;
  threadLength: number;
}

export interface InternalStep {
  diameter: number;
  length: number;
  tolerance: string;
}

export interface CalculationResult {
  rawWeight: number;
  finalWeight: number;
  materialCost: number;
  machiningTime: number;
  machiningCost: number;
  toleranceCost: number;
  threadCost: number;
  internalMachiningCost: number;
  programmingCost: number;
  overheadCost: number;
  totalCost: number;
}
