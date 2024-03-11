import styled from 'styled-components/native';
import { colors } from '../styled';

export const Text = styled.Text`
  color: ${props => props.$color || colors.primary};
  ${props => (props.$lineHeight ? `line-height: ${props.$lineHeight}` : '')}
  font-size: ${props => props.$fontSize || '13px'};
  font-family: Roboto;
  text-align: ${props => props.$textAlign || 'left'};
`;

export const TextThin = styled(Text)`
  font-family: Roboto-Thin;
`;
export const TextLight = styled(Text)`
  font-family: Roboto-Light;
`;
export const TextBold = styled(Text)`
  font-family: Roboto-Bold;
`;
export const TextMedium = styled(Text)`
  font-family: Roboto-Medium;
`;
export const Text13 = styled(Text)`
  font-size: 13px;
  line-height: 16px;
`;
export const Text13Medium = styled(Text13)`
  font-family: Roboto-Medium;
`;
export const Text13Bold = styled(Text13)`
  font-family: Roboto-Bold;
`;
export const Text14 = styled(Text)`
  font-size: 14px;
  line-height: 18px;
`;
export const Text14Medium = styled(Text14)`
  font-family: Roboto-Medium;
`;
export const Text14Bold = styled(Text14)`
  font-family: Roboto-Bold;
`;
export const Text15 = styled(Text)`
  font-size: 15px;
`;
export const Text15Medium = styled(Text15)`
  font-family: Roboto-Medium;
`;
export const Text16 = styled(Text)`
  font-size: 16px;
  line-height: 22px;
`;
export const Text16Bold = styled(Text16)`
  font-family: Roboto-Bold;
`;
export const Text18 = styled(Text)`
  font-size: 18px;
`;
export const Text18Bold = styled(Text18)`
  font-family: Roboto-Bold;
`;
export const Text20 = styled(Text)`
  font-size: 20px;
`;
export const Text20Medium = styled(Text20)`
  font-family: Roboto-Medium;
`;

export const Text20Bold = styled(Text20)`
  font-family: Roboto-Bold;
`;
export const TextCenter = styled(Text)`
  text-align: center;
`;
