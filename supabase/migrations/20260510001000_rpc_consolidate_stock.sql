-- RPC: Consolidation du stock central (medicines)
-- Fusionne les doublons (même nom + même lot) côté serveur.
-- Retourne uniquement un résumé — aucune donnée brute n'est envoyée au navigateur.

CREATE OR REPLACE FUNCTION consolidate_central_stock()
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_groups_merged  INT := 0;
  v_rows_deleted   INT := 0;
  rec              RECORD;
BEGIN
  -- Pour chaque groupe de doublons (même nom normalisé + même lot)
  FOR rec IN
    SELECT
      lower(trim(name))  AS norm_name,
      lower(trim(batch)) AS norm_batch,
      MIN(id)            AS keep_id,
      SUM(qty)           AS total_qty,
      COUNT(*)           AS cnt
    FROM medicines
    GROUP BY lower(trim(name)), lower(trim(batch))
    HAVING COUNT(*) > 1
  LOOP
    -- Mettre à jour la ligne conservée avec la quantité totale
    UPDATE medicines
    SET qty = rec.total_qty
    WHERE id = rec.keep_id;

    -- Supprimer les doublons
    DELETE FROM medicines
    WHERE lower(trim(name))  = rec.norm_name
      AND lower(trim(batch)) = rec.norm_batch
      AND id <> rec.keep_id;

    v_groups_merged := v_groups_merged + 1;
    v_rows_deleted  := v_rows_deleted  + (rec.cnt - 1);
  END LOOP;

  RETURN jsonb_build_object(
    'success',        true,
    'groups_merged',  v_groups_merged,
    'rows_deleted',   v_rows_deleted
  );
END;
$$;

GRANT EXECUTE ON FUNCTION consolidate_central_stock() TO authenticated;


-- RPC: Consolidation du stock d'une pharmacie (pharmacy_stock)
-- Fusionne les lignes dupliquées pour le même médicament dans une pharmacie.

CREATE OR REPLACE FUNCTION consolidate_pharmacy_stock(p_pharmacy_id INT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_groups_merged  INT := 0;
  v_rows_deleted   INT := 0;
  rec              RECORD;
BEGIN
  FOR rec IN
    SELECT
      medicine_id,
      MIN(id)    AS keep_id,
      SUM(qty)   AS total_qty,
      COUNT(*)   AS cnt
    FROM pharmacy_stock
    WHERE pharmacy_id = p_pharmacy_id
    GROUP BY medicine_id
    HAVING COUNT(*) > 1
  LOOP
    UPDATE pharmacy_stock
    SET qty = rec.total_qty
    WHERE id = rec.keep_id;

    DELETE FROM pharmacy_stock
    WHERE medicine_id  = rec.medicine_id
      AND pharmacy_id  = p_pharmacy_id
      AND id          <> rec.keep_id;

    v_groups_merged := v_groups_merged + 1;
    v_rows_deleted  := v_rows_deleted  + (rec.cnt - 1);
  END LOOP;

  RETURN jsonb_build_object(
    'success',        true,
    'groups_merged',  v_groups_merged,
    'rows_deleted',   v_rows_deleted
  );
END;
$$;

GRANT EXECUTE ON FUNCTION consolidate_pharmacy_stock(INT) TO authenticated;
