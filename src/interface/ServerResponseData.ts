export default class ServerResponseData {
  Error: boolean
  Message: string 
  Data: any | null
  constructor(error: boolean, message: any , data: any | null = null) {
    this.Error = error
    this.Message = message
    if (data) {
      this.Data = Object.assign(data)
    }
  }
  GetData<T>() {
    return <T>this.Data
  }
}
