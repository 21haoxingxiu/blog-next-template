import { useQuery } from '@tanstack/react-query'

export const queryKey = ['home']


export const useHomeQueryData = () => {
  return useQuery({
    queryKey,
    queryFn: async () => null!,
    enabled: false,
  }).data!
}
