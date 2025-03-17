export const formatCPF = (cpf: string): string => {
    const numericCPF = cpf.replace(/\D/g, '');
    return numericCPF.slice(0, 11);
  };
  
  export const validateCPF = (cpf: string): boolean => {
    return /^\d{11}$/.test(cpf);
  };