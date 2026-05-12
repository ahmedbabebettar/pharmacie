CREATE OR REPLACE FUNCTION delete_user_by_email(p_email TEXT)
RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE v_deleted INT;
BEGIN
  DELETE FROM public.users WHERE email = lower(trim(p_email));
  GET DIAGNOSTICS v_deleted = ROW_COUNT;
  IF v_deleted = 0 THEN RETURN jsonb_build_object('success', false, 'error', 'Introuvable'); END IF;
  RETURN jsonb_build_object('success', true, 'deleted', v_deleted);
END;$$;
GRANT EXECUTE ON FUNCTION delete_user_by_email(TEXT) TO authenticated;
