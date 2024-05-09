
export const useTabNav = props => {
  let initialRouteName = 'HomeTab';
  if (
    props.route &&
    props.route.params !== undefined &&
    props.route.params.buttonActive !== undefined
  ) {
    initialRouteName = props.route.params.buttonActive;
  }
  return {
    initialRouteName,
  };
};
