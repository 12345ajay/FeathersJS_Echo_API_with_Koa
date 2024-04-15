import type { Params } from '@feathersjs/feathers'
import type { AuthenticationResult } from '@feathersjs/authentication'
import { AuthenticationService } from '@feathersjs/authentication'

export class MyAuthService extends AuthenticationService {
  async getPayload(authResult: AuthenticationResult, params: Params) {
    // Call original `getPayload` first
    const payload = await super.getPayload(authResult, params)
    const { user } = authResult

    if (user && user.permissions) {
      payload.permissions = user.permissions
    }

    return payload
  }
}

