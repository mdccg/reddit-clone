/**
 * 
 * @param votesCount 1699
 * @returns "1,6k"
 */
export const formatVotes = (votesCount: number): string => {
  if (votesCount >= 1000) {
    votesCount = Math.floor(votesCount / 100) / 10;
    return votesCount.toLocaleString() + 'k';
  }
  
  return votesCount.toLocaleString();
}