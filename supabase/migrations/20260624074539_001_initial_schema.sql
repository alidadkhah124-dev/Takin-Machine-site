-- Create admin_settings table for storing machining parameters
CREATE TABLE admin_settings (
  id SERIAL PRIMARY KEY,
  setting_key VARCHAR(100) UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create material_settings table for per-material parameters
CREATE TABLE material_settings (
  id SERIAL PRIMARY KEY,
  material_name VARCHAR(100) UNIQUE NOT NULL,
  material_name_fa VARCHAR(100) NOT NULL,
  cutting_speed DECIMAL(10,2) DEFAULT 100,
  feed_rate DECIMAL(10,4) DEFAULT 0.2,
  density DECIMAL(10,4) DEFAULT 7.85,
  cost_per_kg DECIMAL(10,2) DEFAULT 10000,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create tolerance_coefficients table
CREATE TABLE tolerance_coefficients (
  id SERIAL PRIMARY KEY,
  tolerance_name VARCHAR(50) UNIQUE NOT NULL,
  tolerance_name_fa VARCHAR(50) NOT NULL,
  coefficient DECIMAL(10,4) DEFAULT 1.0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create thread_coefficients table
CREATE TABLE thread_coefficients (
  id SERIAL PRIMARY KEY,
  thread_type VARCHAR(50) UNIQUE NOT NULL,
  thread_type_fa VARCHAR(50) NOT NULL,
  coefficient DECIMAL(10,4) DEFAULT 1.0,
  time_per_thread DECIMAL(10,4) DEFAULT 0.5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE material_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE tolerance_coefficients ENABLE ROW LEVEL SECURITY;
ALTER TABLE thread_coefficients ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_settings
CREATE POLICY "select_admin_settings" ON admin_settings FOR SELECT
  TO authenticated, anon USING (true);
CREATE POLICY "insert_admin_settings" ON admin_settings FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_admin_settings" ON admin_settings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_admin_settings" ON admin_settings FOR DELETE
  TO authenticated USING (true);

-- Create policies for material_settings
CREATE POLICY "select_material_settings" ON material_settings FOR SELECT
  TO authenticated, anon USING (true);
CREATE POLICY "insert_material_settings" ON material_settings FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_material_settings" ON material_settings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_material_settings" ON material_settings FOR DELETE
  TO authenticated USING (true);

-- Create policies for tolerance_coefficients
CREATE POLICY "select_tolerance_coefficients" ON tolerance_coefficients FOR SELECT
  TO authenticated, anon USING (true);
CREATE POLICY "insert_tolerance_coefficients" ON tolerance_coefficients FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_tolerance_coefficients" ON tolerance_coefficients FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_tolerance_coefficients" ON tolerance_coefficients FOR DELETE
  TO authenticated USING (true);

-- Create policies for thread_coefficients
CREATE POLICY "select_thread_coefficients" ON thread_coefficients FOR SELECT
  TO authenticated, anon USING (true);
CREATE POLICY "insert_thread_coefficients" ON thread_coefficients FOR INSERT
  TO authenticated WITH CHECK (true);
CREATE POLICY "update_thread_coefficients" ON thread_coefficients FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_thread_coefficients" ON thread_coefficients FOR DELETE
  TO authenticated USING (true);

-- Insert default admin settings
INSERT INTO admin_settings (setting_key, setting_value, description) VALUES
('machining_cost_per_minute', '{"value": 50000}', 'هزینه هر دقیقه ماشینکاری (ریال)'),
('programming_cost', '{"value": 500000}', 'هزینه برنامه‌نویسی (ریال)'),
('overhead_cost', '{"value": 200000}', 'هزینه سربار (ریال)'),
('minimum_order_amount', '{"value": 1000000}', 'حداقل مبلغ سفارش (ریال)'),
('passes_per_operation', '{"value": 3}', 'تعداد باربرداری هر پاس');

-- Insert default materials
INSERT INTO material_settings (material_name, material_name_fa, cutting_speed, feed_rate, density, cost_per_kg) VALUES
('CK45', 'CK45', 120, 0.25, 7.85, 25000),
('ST37', 'ST37', 150, 0.30, 7.85, 20000),
('Mo40', 'Mo40', 80, 0.15, 7.85, 35000),
('SS304', 'استیل 304', 60, 0.12, 8.00, 80000),
('SS316', 'استیل 316', 50, 0.10, 8.00, 90000),
('Aluminum', 'آلومینیوم', 200, 0.35, 2.70, 50000),
('Brass', 'برنج', 150, 0.30, 8.50, 100000),
('PhosphorBronze', 'فسفر برنز', 100, 0.20, 8.80, 150000),
('CastIron', 'چدن', 70, 0.15, 7.20, 15000),
('Other', 'سایر', 100, 0.20, 7.85, 30000);

-- Insert default tolerances
INSERT INTO tolerance_coefficients (tolerance_name, tolerance_name_fa, coefficient) VALUES
('free', 'آزاد', 1.0),
('pm0_10', '±0.10', 1.2),
('pm0_05', '±0.05', 1.5),
('pm0_02', '±0.02', 2.0),
('pm0_01', '±0.01', 3.0);

-- Insert default thread types
INSERT INTO thread_coefficients (thread_type, thread_type_fa, coefficient, time_per_thread) VALUES
('none', 'بدون رزوه', 1.0, 0),
('metric', 'متریک', 1.5, 0.5),
('inch', 'اینچی', 1.7, 0.6),
('trapezoidal', 'کبریتی', 2.0, 0.8),
('pipe', 'لوله‌ای', 1.8, 0.7);
