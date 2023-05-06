export namespace TOAST_MESSAGE {
  export namespace ERROR {
    export const DEFAULT = 'toast.error.default' 

    export enum LOGIN {
      CREDENTIALS = 'toast.error.login.credentials',
    }

    export enum REGISTER {
      USER_EXIST = 'toast.error.register.userExist',
      INVALID_CODE = 'toast.error.register.verificationCode'
    }

    export enum USER {
      SOMETHING_WRONG = 'toast.error.user.errorOnUpdate'
    }
  }
  export namespace SUCCESS {
    export enum LOGIN {
      CREDENTIALS = 'toast.success.login.credentials',
    }

    export enum REGISTER {
      VERIFICATION_CODE = 'toast.success.register.verificationCode',
      USER_CREATED = 'toast.success.register.created'
    }

    export enum USER {
      UPDATED = 'toast.success.user.updated'
    }
  }

  export namespace PENDING {
    export enum DEFAULT {
      WAITING = 'toast.pending.waiting',
    }
  }
}