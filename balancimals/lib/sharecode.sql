-- Create generate_sharecode function
CREATE OR REPLACE FUNCTION generate_sharecode()
RETURNS text AS $$
DECLARE
  code TEXT;
BEGIN
  LOOP
    code := upper(substring(md5(random()::text) FROM 1 FOR 6));
    EXIT WHEN NOT EXISTS (
      SELECT 1 FROM doctor WHERE sharecode = code
    );
  END LOOP;
  RETURN code;
END;
$$ LANGUAGE plpgsql;
