/**
 * Defines the external Anchor File structure.
 */
export default interface AnchorFileModel {
  writer_lock_id: string | undefined;
  map_file_uri: string;
  operations: {
    create?: {
      suffix_data: {
        delta_hash: string;
        recovery_commitment: string;
        type?: string;
      };
    }[],
    recover?: {
      did_suffix: string;
      signed_data: string;
    }[],
    deactivate?: {
      did_suffix: string;
      signed_data: string;
    }[]
  };
}
