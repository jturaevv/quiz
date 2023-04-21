export namespace TOAST_MESSAGE {
  export namespace ERROR {
    export enum LOGIN {
      CREDENTIALS = 'toast.error.login.credentials',
    }

    export enum REGISTER {
      USER_EXIST = 'toast.error.register.userExist',
      INVALID_CODE = 'toast.error.register.verificationCode'
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
  }
}