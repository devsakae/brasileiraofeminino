export default interface ErrorInterface {
  code: number,
  details: {
    type: string,
    message: string,
  }[],
}
