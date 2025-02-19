export const hasNumber = (value: string): boolean => /\d/.test(value)

export const hasSpecialChar = (value: string): boolean => /[!@#$%^&*]/.test(value)
