export function getError(error: any): string {
  const errorMsg = error.response?.data?.message

  return errorMsg ?? 'Unknown error occurred'
}
