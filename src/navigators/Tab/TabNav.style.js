import { View } from "@/Config/Style/Layout"
import Colors from "@/Config/Theme/Colors"
import styled from 'styled-components/native'

export const Styles = {
  tab: {
    p: '17px',
    borderRadius: 100,
  },
  tabContainer: {
    position: 'absolute',
    bottom: 4,
    borderRadius: 100,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    h: 45,
  },
  text: {
    fontFamily: 'body',
    fontWeight: 500,
    fontSize: 10
  }
}
export const HeaderButtonBackStyle = {
  backgroundColor: Colors.colors.header.backbutton.bg,
  borderRadius: 100,
  borderWidth: 1,
  borderColor: Colors.colors.header.backbutton.border,
  padding: 5,
  marginLeft: 0
}
export const BottomTabContainer = styled.View`
  background: #fff;
`

export const HeaderRightContainer = styled.View`
  margin-right: 10px;
`