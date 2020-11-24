export interface Profile {
  name: string;
  avatar: string;
  email: string;
}

export function updateProfileRequest(data: object) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile: Profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
  };
}
