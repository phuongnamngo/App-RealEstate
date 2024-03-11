import styled from 'styled-components/native';

export const View = styled.View``;
export const Flex = styled.View`
  flex: 1;
`;
export const Gap = styled.View`
  ${props => (props.$width ? `width: ${props.$width}px` : null)}
  ${props => (props.$height ? `height: ${props.$height}px` : null)}
`;

export const HStack = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const HStackEnd = styled(HStack)`
  justify-content: flex-end;
`;
export const HStackStart = styled(HStack)`
  justify-content: flex-start;
`;
export const HStackBetween = styled(HStack)`
  justify-content: space-between;
`;
export const HStackAround = styled(HStack)`
  justify-content: space-around;
`;
export const VStack = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const VStackEnd = styled(VStack)`
  align-items: flex-end;
`;
export const VStackStart = styled(VStack)`
  align-items: flex-start;
`;
